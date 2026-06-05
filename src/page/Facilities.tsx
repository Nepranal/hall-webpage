import CardTabs from "../component/CardTabs";
import ImageCardWithDetails from "../component/ImageCardWithDetails";

export default function Facilities() {
  return (
    <div>
      <div>
        <ImageCardWithDetails
          component={
            <div>
              <p>
                In in occaecat ut sint Lorem ad aute qui ut aliquip et aliqua
                sunt. Irure tempor consequat irure officia cillum. Fugiat aute
                exercitation minim anim excepteur dolor ullamco.
              </p>
              <p>
                Et incididunt adipisicing exercitation nulla laborum.
                Reprehenderit nulla voluptate esse Lorem tempor nisi duis fugiat
                eu. Ea veniam nulla id ullamco commodo minim nisi nostrud et qui
                nulla qui exercitation ut. In ipsum ea sit ipsum. Quis excepteur
                duis nulla laboris mollit exercitation anim. Veniam deserunt
                dolore voluptate occaecat sunt irure aute.
              </p>
            </div>
          }
        />
        <h1>Facilities</h1>
        <ul>
          <li>The Student Village</li>
          <li>Your Room</li>
          <li>Your Floor</li>
          <li>The College</li>
        </ul>
      </div>
      <div>
        <h2>The Student Village</h2>
        <ImageCardWithDetails
          component={
            <div>
              <p>
                Mollit dolore incididunt mollit dolor nulla. Quis elit minim
                nostrud ea eu consectetur in. Pariatur occaecat anim aute ex qui
                ad exercitation mollit velit consectetur nulla labore amet. Ut
                fugiat id dolore eu commodo officia sunt cillum ea reprehenderit
                minim. Aute labore cupidatat excepteur sint proident. Aute dolor
                sunt aute quis ipsum id ex anim Lorem minim incididunt
                incididunt.
              </p>
              <p>
                Tempor voluptate dolore enim anim amet proident irure et ullamco
                sint qui fugiat incididunt. Nisi amet voluptate sint ad sit
                veniam ut in quis. Aute magna quis nisi exercitation anim veniam
                voluptate culpa aliquip laborum ad.
              </p>
            </div>
          }
        />
      </div>
      <div>
        <h2>Your Room</h2>
        <ImageCardWithDetails
          component={
            <div>
              <p>
                Quis ad eu laboris consequat. Esse aute voluptate esse proident
                pariatur quis occaecat cillum laboris sit nostrud est cupidatat.
                Ipsum qui in deserunt nostrud Lorem sint sint minim adipisicing
                elit.
              </p>
              <p>
                Adipisicing ea laborum nisi fugiat commodo. Ullamco aliquip
                fugiat nulla reprehenderit sint excepteur. Ipsum dolor qui irure
                fugiat qui.
              </p>
              <p>
                Consectetur laborum irure dolore nostrud elit. Id eiusmod
                exercitation minim non nulla elit ad Lorem id tempor pariatur
                nisi mollit veniam. Nisi ex aliqua tempor nisi ullamco ut
                voluptate elit ut proident tempor tempor laborum. Enim
                consectetur enim aute quis adipisicing aliqua voluptate dolor
                commodo veniam reprehenderit tempor. Id irure officia anim elit
                consequat ullamco in consequat dolor laborum. Tempor anim
                occaecat aute consectetur. Fugiat et fugiat do nostrud
                reprehenderit in cupidatat ullamco laboris ullamco.
              </p>
              <p>
                Aute dolore eu ipsum Lorem velit eu eiusmod voluptate officia
                nisi commodo magna laboris fugiat. Ex sunt quis non ea dolor
                nostrud mollit enim amet fugiat occaecat. Velit pariatur elit
                commodo cillum velit pariatur. Esse tempor quis exercitation
                laboris ipsum enim tempor aute anim do elit. Lorem labore
                eiusmod id velit esse anim ad eiusmod labore laboris qui
                proident nostrud. Qui sit id voluptate non laboris nulla dolor
                dolore do officia.
              </p>
            </div>
          }
        />
        <ImageCardWithDetails
          component={
            <div>
              <p>
                Quis ad eu laboris consequat. Esse aute voluptate esse proident
                pariatur quis occaecat cillum laboris sit nostrud est cupidatat.
                Ipsum qui in deserunt nostrud Lorem sint sint minim adipisicing
                elit.
              </p>
              <p>
                Adipisicing ea laborum nisi fugiat commodo. Ullamco aliquip
                fugiat nulla reprehenderit sint excepteur. Ipsum dolor qui irure
                fugiat qui.
              </p>
              <p>
                Consectetur laborum irure dolore nostrud elit. Id eiusmod
                exercitation minim non nulla elit ad Lorem id tempor pariatur
                nisi mollit veniam. Nisi ex aliqua tempor nisi ullamco ut
                voluptate elit ut proident tempor tempor laborum. Enim
                consectetur enim aute quis adipisicing aliqua voluptate dolor
                commodo veniam reprehenderit tempor. Id irure officia anim elit
                consequat ullamco in consequat dolor laborum. Tempor anim
                occaecat aute consectetur. Fugiat et fugiat do nostrud
                reprehenderit in cupidatat ullamco laboris ullamco.
              </p>
              <p>
                Aute dolore eu ipsum Lorem velit eu eiusmod voluptate officia
                nisi commodo magna laboris fugiat. Ex sunt quis non ea dolor
                nostrud mollit enim amet fugiat occaecat. Velit pariatur elit
                commodo cillum velit pariatur. Esse tempor quis exercitation
                laboris ipsum enim tempor aute anim do elit. Lorem labore
                eiusmod id velit esse anim ad eiusmod labore laboris qui
                proident nostrud. Qui sit id voluptate non laboris nulla dolor
                dolore do officia.
              </p>
            </div>
          }
        />
        <div>
          <p>
            Cillum adipisicing labore minim tempor ex pariatur Lorem commodo
            ullamco aute sit. Ea ad ex cupidatat anim reprehenderit nisi dolor
            labore magna nulla cillum. Laboris dolor commodo nostrud nostrud
            nisi deserunt aliqua exercitation quis exercitation consequat.
            Exercitation exercitation exercitation sint enim amet in excepteur
            ut veniam. Tempor duis veniam ipsum ullamco ad reprehenderit dolore.
          </p>
          <CardTabs
            cards={[
              { header: "Beds", detail: <p></p> },
              { header: "Storage", detail: <p></p> },
              { header: "Desks", detail: <p></p> },
              { header: "Wifi", detail: <p></p> },
            ]}
          />
        </div>
      </div>
      <div>
        <h2>Your Floor</h2>
        <ImageCardWithDetails />
      </div>
      <div>
        <h2>The College</h2>
        <ImageCardWithDetails />
        <CardTabs
          cards={[
            { header: "Music Room", detail: <p></p> },
            { header: "Study Room", detail: <p></p> },
            { header: "Chinese Tea Chamber", detail: <p></p> },
            { header: "Studio", detail: <p></p> },
          ]}
        />
        <ImageCardWithDetails />
        <ImageCardWithDetails />
      </div>
    </div>
  );
}
