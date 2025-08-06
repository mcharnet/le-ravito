// Requêtes GROQ pour récupérer les données depuis Sanity

export const categoriesQuery = `
  *[_type == "category"] | order(order) {
    _id,
    name,
    description,
    order
  }
`

export const menuItemsQuery = `
  *[_type == "menuItem" && isAvailable == true] | order(category->order, name) {
    _id,
    name,
    description,
    price,
    image,
    allergens,
    isVegetarian,
    isVegan,
    category-> {
      _id,
      name,
      description,
      order
    }
  }
`

export const eventsQuery = `
  *[_type == "event" && isActive == true && startDate >= now()] | order(startDate) {
    _id,
    title,
    description,
    startDate,
    endDate,
    image,
    price,
    capacity,
    category-> {
      name,
      order
    }
  }
`

export const upcomingEventsQuery = `
  *[_type == "event" && isActive == true && startDate >= now()] | order(startDate) [0...3] {
    _id,
    title,
    description,
    startDate,
    image,
    category-> {
      name
    }
  }
`

export const eventCategoriesQuery = `
  *[_type == "eventCategory"] | order(order) {
    _id,
    name,
    description,
    order
  }
`
