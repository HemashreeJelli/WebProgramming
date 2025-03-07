import React from "react";
import "./TimeTable.css";

const timetableData = {
  Monday: ["A1", "F1", "D1", "TB1", "TG1", "-"],
  Tuesday: ["B1", "G1", "E1", "TC1", "TAA1", "-"],
  Wednesday: ["C1", "A1", "L15-BECE204P", "L16-BECE204P", "V2", "L17"],
  Thursday: ["G1", "TE1", "L19-BCE5204P", "L20-BCE5204P", "TCC1", "-"],
  Friday: ["E1", "C1", "TA1", "L22-BMAT202P", "L23-BCSE203E", "-"],
  Saturday: ["X12", "X73", "L25", "L28", "Y12", "L30"],
};

export default function TimeTable() {
  return (
    <div className="timetable-container">
      <h2>Class Time Table</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>08:00</th>
            <th>09:00</th>
            <th>10:00</th>
            <th>11:00</th>
            <th>12:00</th>
            <th>16:00</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(timetableData).map(([day, schedule]) => (
            <tr key={day}>
              <td>{day}</td>
              {schedule.map((slot, index) => (
                <td key={index} className={slot.includes("L") ? "lab" : "theory"}>{slot}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}