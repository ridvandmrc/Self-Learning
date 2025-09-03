- To Manage the firebase connections and data things, we need to have this kind of a service.

```dart

class FirestoreService {

    static final ref = FirebaseFirestore.instance
    .collection('characters')
    .withConverter(
        fromFirestore: Character.fromFirestore,
        toFirestore:  (Character c,_) => c.toFirestore()
    );

    // add a new character
    static Future<void> addCharacter(Character character) async {
        await ref.doc(character.id) // check the id is exist
        .set(character); // add the character to the firebase store

        // usage ==> FirestoreService.addCharacter(character)
    }

    // get Characters

    static Future<QuerySnapshot<Character>> getCharactersOnce(){
        return ref.get(); 
        /* usage  
        final snapshot = await FirestoreService.getCharactersOnce();
        for(var doc in snapshot.docs){
            _chracters.add(doc.data())
        }
        */
    }

    // update a character

    static Future<void> update Character(Character character) async {
        await ref.doc(character.id).update({
            'stats':chracter.statsAsMap,
            'points':character.points,
            'skills':character.skills.map((s) => s.id).toList(),
            'isFav':character.isFav
        })

        // usage:  wawait FirestoreService.updateCharacter(character);
    }

    // delete a character 
    static Future<void> deleteCharacter(Character character) async {
        await ref.doc(character.id).delete();
    }
}

// we should convert to data for firestore

// character to firestore (map)

Map<String, dynamic> toFirestore(){
    return {
        'name':name,
        'slogan':slogan,
        'isFav': _isFav,
        'vocation': vocation.toString() // sentrilaze the enum,
        'skills': skills.map((s)=> s.id).toList() // list of skills id
        'stats': statAsMap,
        'points': points
    }
}

// character from firestore

factory Character.fromFirestore( DocumentSnapshot<Map<String,dynamic>>,
SnapshotOptions? options){

    // get data form snapshot
    final data = snapshot.data()!;

    // make character instance

    Character character = Character(
        name: data['name'],
        slogan: data['slogan'],
        id: snapshot.id,
        vocation: Vocation.values.firstWhere((element) => element.toStrint() == data['vocation']),
    )

    for(String id in data['skills']){
        Skill skill = allSkill.firstWhere((element) => element.id == id);
        character.updateSkill(skill)
    }

    if(data['isfav']) {
        chracter.toggleIsFav()
    }

    character.setStates(points: data['points'], stats:data['stats'])

    return character;

}

```
