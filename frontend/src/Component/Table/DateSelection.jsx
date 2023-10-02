import React from "react";
import { Link } from "react-router-dom";
import cs from './table.module.css';

function DateSelection(props) {


    return (
        <div >
            <span >
                <Link  to="/">Главная страница </Link>
            </span>
            <div className={cs.tab}>
            <table className={cs.tab_total}>
                <thead>
                    <th colspan="7">Декабрь</th>
                </thead>
                <tbody>
                    <tr>
                        <td className={cs.tdTabl}>1</td>
                        <td className={cs.tdTabl}>2</td>
                        <td className={cs.tdTabl}>3</td>
                        <td className={cs.tdTabl}>4</td>
                        <td className={cs.tdTabl}>5</td>
                        <td className={cs.tdTabl}>6</td>
                        <td className={cs.tdTabl}>7</td>
                    </tr>
                    <tr>
                        <td className={cs.tdTabl}>8</td>
                        <td className={cs.tdTabl}>9</td>
                        <td className={cs.tdTabl}>10</td>
                        <td className={cs.tdTabl}>11</td>
                        <td className={cs.tdTabl}>12</td>
                        <td className={cs.tdTabl}>13</td>
                        <td className={cs.tdTabl}>14</td>
                    </tr>
                    <tr>
                        <td className={cs.tdTabl}>15</td>
                        <td className={cs.tdTabl}>16</td>
                        <td className={cs.tdTabl}>17</td>
                        <td className={cs.tdTabl}>18</td>
                        <td className={cs.tdTabl}>19</td>
                        <td className={cs.tdTabl}>20</td>
                        <td className={cs.tdTabl}>21</td>
                    </tr>
                    <tr>
                        <td className={cs.tdTabl}>22</td>
                        <td className={cs.tdTabl}>23</td>
                        <td className={cs.tdTabl}>24</td>
                        <td className={cs.tdTabl}>25</td>
                        <td className={cs.tdTabl}>26</td>
                        <td className={cs.tdTabl}>27</td>
                        <td className={cs.tdTabl}>28</td>
                    </tr>
                    <tr>
                        <td className={cs.tdTabl}>29</td>
                        <td className={cs.tdTabl}>30</td>
                        <td className={cs.tdTabl}>31</td>
                        <td className={cs.tdTabl}></td>
                        <td className={cs.tdTabl}></td>
                        <td className={cs.tdTabl}></td>
                        <td className={cs.tdTabl}></td>
                    </tr>
                </tbody>
                
            </table>
            </div>
            
        </div>
    )
}

export default DateSelection;
