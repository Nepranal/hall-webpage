import FootNote from "../component/FootNote";
import ImageCardWithDetails from "../component/ImageCardWithDetails";
import ProfileInfoModel from "../model/ProfileInfoModel";

export default function About() {
  let profiles = ProfileInfoModel.getTutorsProfileInfo();
  let benefactors = ProfileInfoModel.getTutorsProfileInfo();

  return (
    <div>
      <div>
        <p>About LCC</p>
        <ul>
          <li>Tutorial Team</li>
          <li>History</li>
          <li>Rules & Regulations</li>
        </ul>
      </div>
      <div>
        <p>Tutorial Team</p>
        <p>
          Duis consectetur velit et commodo. Occaecat nulla et minim magna elit
          elit fugiat consectetur anim laboris nisi culpa non. Minim quis
          aliquip laboris deserunt ea nulla.
        </p>
        <p>
          Sint qui cillum aliquip elit ut eiusmod. Ullamco et eiusmod magna
          aliquip in reprehenderit adipisicing esse id adipisicing esse. Commodo
          cillum aliqua irure reprehenderit non ullamco ut ad.
        </p>
        <div>
          {profiles.map((profile) => (
            <ImageCardWithDetails
              component={
                <ul>
                  <li>{profile.name}</li>
                  <li>{profile.position}</li>
                  <li>{profile.details}</li>
                  <li>{profile.contact_info}</li>
                </ul>
              }
            />
          ))}
        </div>
      </div>
      <div>
        {/* Figure out how to section this part better */}
        <ImageCardWithDetails />
        <p>Our History</p>

        <p>
          Lorem ex ipsum sunt proident pariatur excepteur laboris labore
          exercitation qui esse exercitation laborum magna. Sint dolore id ea
          amet consectetur cillum Lorem in proident sint deserunt. Duis ullamco
          mollit esse quis tempor eiusmod fugiat ut. Pariatur tempor consectetur
          quis amet commodo Lorem sunt enim quis incididunt tempor anim
          exercitation. Commodo irure occaecat nostrud ad sit eu aliqua.
        </p>
        <p>
          Ad laborum magna minim consectetur eu veniam sint ad. Nostrud amet
          quis amet proident labore exercitation reprehenderit. Ipsum aliquip
          fugiat velit voluptate est sit amet. Voluptate Lorem ullamco velit
          eiusmod voluptate reprehenderit proident enim cillum ipsum nostrud ea
          quis esse. Sint aute do consequat nisi laboris id quis. Commodo dolore
          amet eu est amet.
        </p>

        <p>Benefactors</p>
        {benefactors.map((benefactor) => (
          <div>
            <p>{benefactor.name}</p>
            <p>{benefactor.alt_name}</p>
          </div>
        ))}
      </div>
      <div>
        <p>Rules and Regulations</p>
        <ul>
          <li>
            <a>Lap-Chee College</a>
            <a>Jockey Club Student Village III</a>
            <a>HKU Residential Colleges</a>
          </li>
        </ul>
      </div>
      <FootNote />
    </div>
  );
}
