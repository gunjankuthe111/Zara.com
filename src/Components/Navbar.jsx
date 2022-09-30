import {HamburgerIcon, Search2Icon, EditIcon} from "@chakra-ui/icons";
import "../Styles/Navbar.css"
export default function Navbar(){
    return (
      <div id="navbar">
        <div>
          <div id="logoContainer">
            <div>
              <HamburgerIcon />
            </div>
            <div>ZARA</div>
          </div>
          <div id="LinkContainer">
            <div>
              <Search2Icon mb={5} mr={8}/>
              Search
            </div>
            <div>
                <EditIcon mb={5}/>
                Cart</div>
          </div>
        </div>
      </div>
    );
}