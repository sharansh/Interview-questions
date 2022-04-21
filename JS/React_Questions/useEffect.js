useEffect(()=>{
    alert('i am called for set Example');
    sharansh();
    return () => {
        alert('i am called after the component is unmounted');
    }
},[])