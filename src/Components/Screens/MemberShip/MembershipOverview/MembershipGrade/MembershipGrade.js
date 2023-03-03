import axios from 'axios'
import { useEffect, useState } from 'react'
import { GRADES_API, IMAGE_URL } from '../../../../../Utilities/APIs'

import './MembershipGrade.css'

function MembershipGrade() {

    const [grades, setGrades] = useState('')
    useEffect(() => {

        async function getGrades() {
            const { data } = await axios.get(GRADES_API)
            setGrades(data)
        }
        getGrades()

    }, [])

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <section className='membership_grade'>
            <div className="container">
                <div className="who_we_are">
                    <div className="membership_wrapper">

                        <div className="nav_with_title">
                            <h3 className='sc_title'>{grades[0]?.title}</h3>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li role="presentation" onClick={() => toggleTab(1)} className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}>
                                    {grades[0]?.afftitle}
                                </li>

                                <li role="presentation" onClick={() => toggleTab(2)} className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}>
                                    {grades[0]?.memtitle}
                                </li>
                                <li role="presentation" onClick={() => toggleTab(3)} className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}>
                                    {grades[0]?.cmtitle}
                                </li>
                                <li role="presentation" onClick={() => toggleTab(4)} className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'}>
                                    {grades[0]?.cftitle}
                                </li>
                            </ul>
                        </div>
                        <div className="image_wrapper">
                            <img src={IMAGE_URL + grades[0]?.image} alt="thumb" />
                        </div>
                        <div className="tab-content">
                            <div role="tabpanel" className={toggleState === 1 ? "tab-pane active-tab-pane desc" : "tab-pane"} id="home">{grades[0]?.affdescription}</div>
                            <div role="tabpanel" className={toggleState === 2 ? "tab-pane active-tab-pane desc" : "tab-pane"} id="profile">{grades[0]?.memdescription}</div>
                            <div role="tabpanel" className={toggleState === 3 ? "tab-pane active-tab-pane desc" : "tab-pane"} id="messages">{grades[0]?.cmdescription}</div>
                            <div role="tabpanel" className={toggleState === 4 ? "tab-pane active-tab-pane desc" : "tab-pane"} id="settings">{grades[0]?.cfdescription}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MembershipGrade