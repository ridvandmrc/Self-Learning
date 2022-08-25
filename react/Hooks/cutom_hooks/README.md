### Custom Hooks
* Hooks are a new addition in React 16.8
* We can build our own Hooks.
* we can use stat in hooks or we can not
* also we can return more than one attribute not only one

```tsx
function useFriendStatus(friendId){
    const [isOnline,setIsOnline] = useState(null);

    /* ... */
    return isOnline;
}

// usage

function FriendStatus(props) {
    const isOnline = useFriendStatus(props.friend.id);

    if(isOnline === null){
        return 'loading ...';
    }

    return isOnline ? 'online':'offline';
}

```

### =====> Summary
* We can use **useState** in custom hooks to reRender again
* Custom hooks needs to have experiences


for more example click