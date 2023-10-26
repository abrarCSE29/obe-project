import React from "react";
import Nav from "./Nav";
import Pageheader from "./Pageheader";
import Topbanner from "./Topbanner";
import { Input } from "@mui/material";
import Data from "./Dummy.json";
import { Button } from "@mui/material";

export default function FinalEvaluation() {
  console.log(Data);
  return (
    <div>
      <Nav />
      <Topbanner />
      <Pageheader className="finalevHeader" header="Final Evaluation" />
      <div className="content-finalEvaluation">
        <div className="tableFinalEvaluation">
          <form action="" method="post">
            <div className="button-align">
            <button type="button" class="btn btn-success">SAVE</button>
          <button type="button" class="btn btn-warning">BACK</button>
            </div>
          
          
            <table>
              <thead>
                <td>Sl No</td>
                <td>Exam Roll</td>
                <td>Registration</td>
                <td>Name</td>
                <td className="colWidth-10">C01</td>
                <td className="colWidth-10">CO2</td>
                <td className="colWidth-10">C03</td>
                <td className="colWidth-10">C04</td>
                <td className="colWidth-10">C05</td>
              </thead>

              {Data.map((e) => {
                return (
                  <tr>
                    <td>{e["Sl No"]}</td>
                    <td>{e["Exam Roll"]}</td>
                    <td>{e.Registration}</td>
                    <td className="name">{e.Name}</td>
                    <td className="colWidth">
                      <Input
                        sx={{
                          width: 50,
                        }}
                      />
                    </td>
                    <td>
                      <Input 
                        sx={{
                          width: 50,
                
                        }}
                      />
                    </td>
                    <td>
                      <Input
                        sx={{
                          width: 50,
                          
                        }}
                      />
                    </td>
                    <td>
                      <Input
                        sx={{
                          width: 50,
                          
                        }}
                      />
                    </td>
                    <td>
                      <Input
                        sx={{
                          width: 50,
                          
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}
