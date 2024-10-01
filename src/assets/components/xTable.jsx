import { useState } from "react";

const data = [
  { date: "2022-09-01", views: 100, article: "Article 1", id: 1 },

  { date: "2023-09-01", views: 100, article: "Article 1", id: 2 },

  { date: "2023-09-02", views: 150, article: "Article 2", id: 3 },

  { date: "2023-09-02", views: 120, article: "Article 3", id: 4 },

  { date: "2020-09-03", views: 200, article: "Article 4", id: 5 },
];
const Xtable = () => {
  const [newData, setNewData] = useState(data);
  const sortByDate = () => {
    const car = newData.sort((a, b) => new Date(b.date) - new Date(a.date));
    setNewData([...car]);
  };
  const sortByViews = () => {
    const car = newData.sort((a, b) => b.views - a.views);
    setNewData([...car]);
  };

  console.log(newData);
  return (
    <>
      <h1>Date and Views Table</h1>
      <button className="btn_date" onClick={sortByDate}>
        Sort by Date
      </button>
      <button className="btn_views" onClick={sortByViews}>
        Sort by Views
      </button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {newData.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.date}</td>
                <td>{ele.views}</td>
                <td>{ele.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Xtable;
