import  { useState, useEffect } from "react";

const TopGitHubUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubUsers = async () => {
      try {
        const response = await fetch("https://api.github.com/users?per_page=10");
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub users:", error);
        setLoading(false);
      }
    };

    fetchGitHubUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Top 10 GitHub Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopGitHubUsers;
