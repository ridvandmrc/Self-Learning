## Mixins
* we can use the mixins **like class**.
* But Mixins behave like **class members.**
* when we use the mixins **with** class, we can use the mixins data like class member. 
* We can use it for encapsulation and simplify the classes.
* **underscore _** means private member.

* For private fiels we should use getter and setters, to access data.


```dart
// mixin example

mixin Stats {
    // mixins data, defination like a class member
    // '_' means private member
    int _point = 10;
    int _health = 10;
    int _attack = 10;
    int _defense = 10;
    int _skill = 10;

    // getters
    int get points => _points; // similar like JS.

    Map<String, int> get statAsMap = {
        "health": _health,
        "attack": _attack,
        ...
    }

    List<Map<String, String>> get statAsFormattedList => [
        {'title':'health', 'value':_health.toString()},
        {'title':'attack', 'value':_attack.toString()}
        ...

    ]


    // methods
    void increaseStat(String stat) {
        if(_points > 0) {
            if(stat == 'health'){
                _health++;
            }
            ...
        }
    }

    void decreaseStat(String stat) {
        if(stat == 'health' && health > 5) {
            ...
        }
    }
}

```