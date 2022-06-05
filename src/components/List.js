import React from "react";

function List({ items, filteredItem, editItem }) {
  return (
    <div className="bg-white px-5 space-y-4">
      {items?.map((item) => {
        return (
          <article key={item.id} className=" flex  align-baseline py-4 ">
            <h3 className="grow hover:bg-[#818cf887] hover:text-white py-1 pl-2">
              {item.title}
            </h3>
            <div className="flex space-x-2">
              {/* Edit Icon  */}
              <button onClick={() => editItem(item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
              {/* delete icon  */}
              <button onClick={() => filteredItem(item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default List;
