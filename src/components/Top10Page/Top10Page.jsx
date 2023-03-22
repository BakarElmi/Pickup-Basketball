import React from 'react';
import './Top10Page.css'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Top10Page() {
  return (
    <div className="container">
      <h1>Top10 Players</h1>
      <div className="top10" >
      <table >
        <tr>
          <th >Name</th>
          <th>Wins</th>
          <th>Loss</th>
        </tr>
        <tr>
          <td>theMichaelJordan</td>
          <td>243</td>
          <td>2</td>
        </tr>
        <tr>
          <td>hoops4win</td>
          <td>101</td>
          <td>27</td>
        </tr>
        <tr>
          <td>Gamepoint</td>
          <td>94</td>
          <td>35</td>
        </tr>
        <tr>
          <td>Kobee</td>
          <td>92</td>
          <td>26</td>
        </tr>
        <tr>
          <td>Eastsideball</td>
          <td>63</td>
          <td>13</td>
        </tr>
        <tr>
          <td>chaunceyBillups</td>
          <td>60</td>
          <td>28</td>
        </tr>
        <tr>
          <td>theTruth</td>
          <td>52</td>
          <td>12</td>
        </tr>
        <tr>
          <td>Ballplayer438</td>
          <td>51</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Splashhh</td>
          <td>46</td>
          <td>17</td>
        </tr>
        <tr>
          <td>theMagic</td>
          <td>42</td>
          <td>21</td>
        </tr>
      </table>
      </div>
    </div>
  );
}

export default Top10Page;
