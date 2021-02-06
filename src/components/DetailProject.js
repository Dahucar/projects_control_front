import React from "react";
import '../styles/timeline.css';

export const DetailProject = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-5">Horizontal Timeline</h4>
                <div className="badge bg-primary empty"></div>
                <div className="badge bg-primary empty"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/*

<li className="list-inline-item event-list">
  <div className="px-4">
    <div className="event-date bg-soft-danger text-danger">
      7 June
    </div>
  </div>
</li>

*/