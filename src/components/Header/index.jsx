import './index.scss';
import { useLocation } from 'react-router';
import { useState } from "react";
import { Link } from 'react-router-dom';
import IconHome from '../../icons/IconHome';
import IconStats from '../../icons/IconStats';
import IconProfile from '../../icons/IconProfile';


export default function Header() {
    
    const path = useLocation();

    const isSelected = (name) => {
        return name === path.pathname;
    };

    const IconLink = ({icon, to, name}) => {
        const [hover, setHover] = useState(false);

        return (
            <Link to={to} className={"header_link"}>
                <div 
                    className='header_link_cover'
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={() => {if(to==="/") window.location = "/"}}
                >
                    <icon.type color={isSelected(to)||hover?"#6B38FB" : "#000"} />
                    <div className={isSelected(to) ? "selected":""}>{name}</div>
                </div>
            </Link>
        );
    }

    return (
        <div className='header'>
            <Link to="/" className="header_logo">
                <img src={"/yogi.png"} alt="Yogasaan" onClick={() => window.location = "/"} style={{ width: "100%" }} />
            </Link>
            <div className='header_links'>
                <IconLink icon={<IconHome />} to="/" name="Home" />
                <IconLink icon={<IconStats />} to="/stats" name="Analytics" />
                <IconLink icon={<IconProfile />} to="/profile" name="Profile" />
            </div>
        </div>
    );
};