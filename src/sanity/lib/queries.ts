// Requêtes GROQ pour récupérer les données depuis Sanity

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
      name,
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
    category
  }
`

export const upcomingEventsQuery = `
  *[_type == "event" && isActive == true && startDate >= now()] | order(startDate) [0...3] {
    _id,
    title,
    description,
    startDate,
    image,
    category
  }
`
