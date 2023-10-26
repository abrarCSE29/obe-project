import React from "react";
import Nav from "./Nav";
import Pageheader from "./Pageheader";
import Topbanner from "./Topbanner";
import Card0 from "./Card0";
import Card1 from "./Card1";
export default function Dashboard() {
  return (
    <div>
      <Nav />
        <Topbanner />
        <Pageheader header="Dashboard"/>
      <div className="content-paragraph">
        <Card0 cardDesc="Active Courses" cardNum="10" />
        <Card1 cardDesc="Marks Submission Remaining" cardNum="2" />
      </div>
    </div>
  );
}
