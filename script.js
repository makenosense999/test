const data = {
  services: [
    {
      id: 1,
      head: null,
      name: 'Проф.осмотр',
      node: 0,
      price: 100.0,
      sorthead: 20,
    },
    {
      id: 2,
      head: null,
      name: 'Хирургия',
      node: 1,
      price: 0.0,
      sorthead: 10,
    },
    {
      id: 3,
      head: 2,
      name: 'Удаление зубов',
      node: 1,
      price: 0.0,
      sorthead: 10,
    },
    {
      id: 4,
      head: 3,
      name: 'Удаление зуба',
      node: 0,
      price: 800.0,
      sorthead: 10,
    },
    {
      id: 5,
      head: 3,
      name: 'Удаление 8ого зуба',
      node: 0,
      price: 1000.0,
      sorthead: 30,
    },
    {
      id: 6,
      head: 3,
      name: 'Удаление осколка зуба',
      node: 0,
      price: 2000.0,
      sorthead: 20,
    },
    {
      id: 7,
      head: 2,
      name: 'Хирургические вмешательство',
      node: 0,
      price: 200.0,
      sorthead: 10,
    },
    {
      id: 8,
      head: 2,
      name: 'Имплантация зубов',
      node: 1,
      price: 0.0,
      sorthead: 20,
    },
    {
      id: 9,
      head: 8,
      name: 'Коронка',
      node: 0,
      price: 3000.0,
      sorthead: 10,
    },
    {
      id: 10,
      head: 8,
      name: 'Слепок челюсти',
      node: 0,
      price: 500.0,
      sorthead: 20,
    },
  ],
}

const tree = document.getElementById('tree')
renderTree(data.services, tree)

function renderTree(services, parentElement, parentId = null) {
  const childServices = services.filter((service) => service.head === parentId)
  if (childServices.length === 0) return

  const ul = document.createElement('ul')
  parentElement.appendChild(ul)

  childServices.sort((a, b) => a.sorthead - b.sorthead)

  childServices.forEach((service) => {
    const li = document.createElement('li')
    li.textContent = `${service.name} (${service.price})`
    ul.appendChild(li)

    if (service.node === 1) {
      li.classList.add('node')
      renderTree(services, li, service.id)
    }
  })
}
