const todoSelector = store => store.todo;

const findSelector = store => {
  return store.find;
};

const sortSelector = store => {
  return store.sort;
};

export const todoSelectorId = store => todoSelector(store)?.listId || [];

export const todoByIdSelectors = (store, id) => {
  const todoStore = todoSelector(store);

  if (!todoSelector) {
    return {};
  }

  const todoItem = todoStore.byId[id];

  return {
    ...todoItem,
    id,
  };
};

export const todosSelectors = store => {
  const listToDo = todoSelectorId(store).map(id =>
    todoByIdSelectors(store, id)
  );

  if (sortSelector(store) === "false") {
    return listToDo
      .filter(item => item.completed === true)
      .filter(item =>
        item.title.toLowerCase().includes(findSelector(store).toLowerCase())
      );
  }

  if (sortSelector(store) === "true") {
    return listToDo
      .filter(item => item.completed === false)
      .filter(item =>
        item.title.toLowerCase().includes(findSelector(store).toLowerCase())
      );
  }

  if (sortSelector(store) === "") {
    listToDo.filter(item =>
      item.title.toLowerCase().includes(findSelector(store).toLowerCase())
    );
  }

  return listToDo.filter(item =>
    item.title.toLowerCase().includes(findSelector(store).toLowerCase())
  );
};
