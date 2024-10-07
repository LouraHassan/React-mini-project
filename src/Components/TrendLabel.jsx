import React from "react";
function TrendLabel(props) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-secondary text-sm">{props.sub1}</p>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-sm m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-dots"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-72 p-2 shadow shadow-slate-700"
          >
            <li>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-mood-sad"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 10l.01 0" />
                  <path d="M15 10l.01 0" />
                  <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
                </svg>{" "}
                Not interested in this
              </p>
            </li>
            <li>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-mood-sad"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 10l.01 0" />
                  <path d="M15 10l.01 0" />
                  <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
                </svg>{" "}
                This trend is harmful or spammy
              </p>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-right">{props.title}</p>
      <p className="text-secondary text-sm">{props.sub2}</p>
    </div>
  );
}
export default TrendLabel;
