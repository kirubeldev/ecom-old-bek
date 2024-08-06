
import Catagorries from "./catagory/catagory";
import Delivery from "./delivery/delivery";
import Explor from "./explor/explor";
import Featured from "./featured/featured";

import Hero from "./hero/hero";

import Productcarosel from "./productcarosel/productcarosel";
import Thismonth from "./thismonth/Thismonth";
import Today from "./today.jsx/Today";

export default function Home() {
  return (
    <div className="max-w-screen h-full z-10 ">

      {/* Header */}
{/* <Nav/>      */}

      {/* hero Content */}
<Hero/>

 {/* today */}

  <Today/>

  {/* carosel product */}

  <Productcarosel/>

  {/* catagories */}

  <Catagorries/>
  {/* this month */}
  <Thismonth/>
  {/* explor */}
  <Explor/>
  {/* featured */}
  <Featured/>
  {/* delivery */}
<Delivery/>
{/* footer */}

    </div>
  );
}
