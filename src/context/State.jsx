import React, { useEffect, useState } from 'react'
import myContext from './myContext';
import { fireDB } from '../firebase/FirebaseConfig';
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';


function MyState(props) {
  const [mode, setMode] = useState('light');
  const [loading, setLoading] = useState(false);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })

  // ********************** Add Product Section  **********************
  const addProduct = async () => {
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error('Please fill all fields')
    }
    const productRef = collection(fireDB, "products")
    setLoading(true)
    try {
      await addDoc(productRef, products)
      toast.success("Product Add successfully")
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 1000);
      getProductData()
      // closeModal()
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setProducts("")
  }

  const [product, setProduct] = useState([]);

  // ****** get product
  const getProductData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time"),
        // limit(5)
      );
      const data =  onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray)
        // console.log(product)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const edithandle = (item) => {
    // console.log(item)
    setProducts(item)

    // console.log(products)
  }
  // update product
  const updateProduct = async (item) => {
    setLoading(true)
    console.log("clicked")
    try {
      // setDoc is an asynchronous function provided by the Firestore library for updating a document with the specified data.
      // doc is a function provided by the Firestore library that creates a reference to a specific document in the database.

      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated successfully")
      getProductData();
      setLoading(false)
      window.location.href = '/dashboard'
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    setProducts("")
  }

  const deleteProduct = async (item) => {

    try {
      setLoading(true)
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success('Product Deleted successfully')
      setLoading(false)
      getProductData()
    } catch (error) {
      // toast.success('Product Deleted Falied')
      setLoading(false)
    }
  }

  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "users"))
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false)
      });
      setUser(usersArray);
      // console.log(usersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

 

  const [orderType, setorderType] = useState('')

  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')

  const [order, setorder] = useState({
    name: null,
    adress: null,
    pincode: null,
    number: null,
    status:"waiting for picking",
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })
const [orders, setorders]= useState([])
  // ********************** add order Section  **********************
  const Addorder = async () => {
    console.log(order)
    if (order.name == null || order.adress == null || order.pincode == null || order.number == null) {
      return toast.error('Please fill all fields')
      
    }
    const orderRef = collection(fireDB, "orders")
    setLoading(true)
    try {
      await addDoc(orderRef, order)
      toast.success("Order successfully")
      setorder("")
      localStorage.setItem('cart', JSON.stringify([]));
      setLoading(false)
      setTimeout(() => {
        window.location.href = '/'
      }, 1000);
      getOrderData();
      // closeModal()
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setorder("")
    localStorage.setItem('cart', JSON.stringify([]));
  }
  const [orderLen,setorderLen]=useState(0)


  const getOrderData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, "orders"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let ordersArray = [];
        QuerySnapshot.forEach((doc) => {
          ordersArray.push({ ...doc.data(), id: doc.id });
        });
        setorders(ordersArray)
        setorderLen(ordersArray.length)
        // console.log(orders)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  const orderhandle = (item) => {
    // console.log(item)
    setorder(item)

    console.log(order.id)
  }

  const updateorder = async () => {
    setLoading(true)
    // console.log("clicked")
    
    try {
      // setDoc is an asynchronous function provided by the Firestore library for updating a document with the specified data.
      // doc is a function provided by the Firestore library that creates a reference to a specific document in the database.
      // console.log(order.id)
      // debugger;
      await setDoc(doc(fireDB, "orders", order.id), order);
      toast.success("order Updated successfully")
      getOrderData();
      setLoading(false)
      window.location.href = '/dashboard'
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    setorder("")
  }

  useEffect(() => {
    getProductData();
    getUserData();
    getOrderData()
  }, []);


  
  return (
    <myContext.Provider value={{
      mode, toggleMode, loading, setLoading,
      product, setProducts, addProduct, edithandle, updateProduct, deleteProduct,getProductData, products, user, searchkey, setSearchkey, filterType, setFilterType,
      filterPrice, setFilterPrice, order, setorder,Addorder,orderLen,orders,orderhandle,updateorder,orderType, setorderType
    }}>
      {props.children}
    </myContext.Provider>
  )
}

export default MyState