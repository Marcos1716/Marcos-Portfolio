'use strict';

const eduBox = document.querySelector('.education-box');
const timelineBox = document.querySelector('.timeline-box');

//*functions
const displayTimeline = () => {
  const newData = timeLine
    .map((item) => {
      return `<!-- single timeline item -->
  <article class="timeline-item">
    <h4>${item.year}</h4>
    <p class="works-name">${item.work}</p>
    <p>
    ${item.jobDes}
    </p>

    <span class="number"> ${item.id} </span>
  </article>
  <!-- end of  single timeline item -->`;
    })
    .join('');

  timelineBox.innerHTML = newData;
};

const displayEdu = () => {
  const newData = education
    .map((item) => {
      return `   <!-- single article -->
      <div class="card">
        <!-- front of the card -->
        <div class="card-side card-front">
          <img src="./images/school-${item.id}.jpg" alt="" />
          <div class="card-info">
            <h4>${item.schoolName}</h4>
            <div class="card-footer">
              <p>${item.year}</p>
            </div>
          </div>
        </div>
        <!-- card back  -->
        <div class="card-side card-back">
          <button class="btn">read more</button>
        </div>
      </div>
      <!-- end of single article -->`;
    })
    .join('');

  eduBox.innerHTML = newData;
};

window.addEventListener('DOMContentLoaded', () => {
  displayTimeline();
  displayEdu();
});
