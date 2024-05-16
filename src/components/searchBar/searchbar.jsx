import { useState } from "react";
import "./searchbar.scss";
export default function Searchbar() {
  const types = ["buy", "rent"];

  const [query, serQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const swithType = (val) => {
    serQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div>
      <div className="searchbar">
        <div className="type">
          {types.map((type) => {
            return (
              <button
                key={type}
                onClick={() => swithType(type)}
                className={query.type === type ? "active" : ""}
              >
                {type}
              </button>
            );
          })}
        </div>
        <form>
          <input type="text" name="location" placeholder="City Location" />
          <input
            type="number"
            name="minPrice"
            min={0}
            max={1000000}
            placeholder="Min Price"
          />
          <input
            type="number"
            name="maxPrice"
            min={0}
            max={1000000}
            placeholder="Max Price"
          />
          <button>
            <img src="search.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}
