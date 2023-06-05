export const fetchUsers = async (page, perPage) => {
    const response = await fetch(`https://reqres.in/api/users?page=${page}&per_page=${perPage}`);
    const data = await response.json();
    return data.data;
  };
  