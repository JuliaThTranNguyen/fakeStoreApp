export const calculateTotalPages = (
    amountOfEntities: number,
    entitiesPerPage: number
  ) => {
    return Math.ceil(amountOfEntities / entitiesPerPage);
  };
  
  export const getPaginatedProducts = <T>(
    entities: T[],
    page: number,
    entitiesPerPage: number
  ) => {
    return entities.slice((page - 1) * entitiesPerPage, page * entitiesPerPage);
  };
  