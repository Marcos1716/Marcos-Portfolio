const eduBox = document.querySelector('.education-box');

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
  displayEdu();
});
