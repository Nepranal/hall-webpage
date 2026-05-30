import FootNote from "../component/FootNote";
import ImageCardWithDetails from "../component/ImageCardWithDetails";

export default function LandingPage() {
  return (
    <>
      <ImageCardWithDetails
        component={
          <div>
            <p>Page Navigation</p>
            <ul>
              <li>About Us</li>
              <li>Student Life</li>
              <li>Amenities</li>
              <li>Admissions</li>
            </ul>
            <button>Interested in LCC</button>
            <button>Currently staying at LCC</button>
          </div>
        }
      ></ImageCardWithDetails>
      <ImageCardWithDetails
        component={
          <div>
            <p>About Us</p>
            <p>
              Id est consectetur sit proident in. Est in irure ad minim sunt
              aute nostrud deserunt et tempor consectetur. In pariatur laboris
              magna irure elit nulla cillum incididunt aliquip dolore in tempor
              amet. Enim reprehenderit ad dolore incididunt occaecat consequat
              voluptate excepteur minim. Lorem nostrud occaecat esse commodo
              veniam sint culpa.
            </p>
            <button>Learn More</button>
          </div>
        }
      ></ImageCardWithDetails>
      <ImageCardWithDetails
        component={
          <div>
            <p>Student Life</p>
            <p>
              Aliqua fugiat consectetur consectetur sint nostrud aliquip enim
              veniam aute mollit. Id ullamco proident officia amet in nulla.
              Dolore et duis do amet in id qui proident ipsum id excepteur et
              est quis. Incididunt voluptate amet consectetur et aute officia
              fugiat sunt. Minim do laboris ea et laborum nostrud cupidatat
              irure aliqua. Est aute fugiat ad do incididunt Lorem excepteur
              minim non labore quis et sunt reprehenderit. Minim non occaecat
              est eiusmod reprehenderit elit fugiat minim duis quis laboris
              commodo.
            </p>
            <button>Learn More</button>
          </div>
        }
      ></ImageCardWithDetails>
      <ImageCardWithDetails
        component={
          <div>
            <p>Facilities</p>
            <button>Learn More</button>
          </div>
        }
      ></ImageCardWithDetails>
      <ImageCardWithDetails
        component={
          <div>
            <p>Are you ready to join us?</p>
            <button>Admission</button>
          </div>
        }
      ></ImageCardWithDetails>
      <FootNote />
    </>
  );
}
