import { useEffect, useState } from "react";
import Layout from "./Layout";
import Alert from "./components/Alert";
import List from "./components/List";

function App() {
  const getLocalStorage = () => {
    let list = localStorage.getItem("list");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };

  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    if (!name) {
      return setAlert({
        show: true,
        msg: "Please Enter A Title",
        type: "danger",
      });
    } else if (name && isEditing) {
      // deal with editing
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      setAlert({
        show: true,
        msg: "Value Changed Successfully.",
        type: "success",
      });
    } else {
      setAlert({ show: true, msg: "Item Added Successfully", type: "success" });
      setList([...list, { id: new Date().getTime().toString(), title: name }]);
      setName("");
      console.log(list);
    }
  };

  // remove alert by the user
  const removeAlert = (e) => {
    e.preventDefault();
    return setAlert({ show: false });
  };

  // clear all items, setting alert from danger type
  const clearAllItems = () => {
    setAlert({
      type: "danger",
      show: true,
      msg: "Are You Sure? You're Gonna Delete All",
    });
    setList([]);
  };

  //delete individual object(item)
  const filteredItem = (id) => {
    setAlert({
      type: "danger",
      show: true,
      msg: "Item removed",
    });
    const filteredItem = list.filter((item) => item.id !== id);
    console.log(filteredItem);
    setList(filteredItem);
  };

  //edit individual item
  const editItem = (id) => {
    setIsEditing(true);
    const item = list.find((item) => item.id === id);
    setEditId(id);
    setName(item.title);
  };

  return (
    <Layout>
      <section className="form">
        <form
          onSubmit={handleSubmit}
          className="grow flex flex-col justify-center"
        >
          <div>
            {alert.show && <Alert {...alert} removeAlert={removeAlert} />}
          </div>
          <div className="flex  justify-center">
            <input
              className={`p-4 w-3/5 focus:outline-none focus:shadow-lg`}
              placeholder="e.g apple"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <button type="submit" className="bg-red-400 p-2 text-white">
              {isEditing ? "Edit Item" : "Add Item"}
            </button>
          </div>
        </form>
        <div className="w-3/4 py-5 space-y-4  m-auto">
          {list.length > 0 && (
            <>
              <List
                items={list}
                filteredItem={filteredItem}
                editItem={editItem}
              />
              <button
                className="text-red-500 "
                type="submit"
                onClick={clearAllItems}
              >
                <span className="m-auto text-black underline">Clear Items</span>
              </button>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default App;
