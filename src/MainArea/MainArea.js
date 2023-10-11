import React from "react";
import "./MainArea.css";
import {
  FaAngleDown,
  FaCommentAlt,
  FaFacebookMessenger,
  FaFontAwesomeFlag,
  FaGrin,
  FaMedrt,
  FaRegShareSquare,
  FaRegThumbsUp,
  FaSearch,
  FaUserFriends,
} from "react-icons/fa";
import { MdMoreHoriz, MdVideoCall } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

function MainArea() {
  return (
    <div className="Main">
      <div className="Rside">
        <div className="Profile">
          <img
            src="images/2.jpg"
            alt="dp"
            style={{ height: "40px", width: "40px", padding: "1rem" }}
          />
          Bharani Selvaraj
        </div>
        <div className="Pro">
          <FaFontAwesomeFlag color="green" fontSize="2rem" />
          <div>Pages</div>
        </div>
        <div className="Pro">
          <FaMedrt color="blue" fontSize="2rem" />
          <div>COVID-19 Information Center</div>
        </div>
        <div className="Pro">
          <FaUserFriends color="blue" fontSize="2rem" />
          <div>Friends</div>
        </div>
        <div className="Pro">
          <FaFacebookMessenger color="green" fontSize="2rem" />
          <div>Messenger Kids</div>
        </div>
        <div className="Pro1">
          <FaAngleDown color="green" fontSize="2rem" />
          <div>See More</div>
        </div>
        <div className="Profiles">
          <img
            src="/images/photo2.jpg"
            alt="logo"
            style={{ height: "40px", padding: "1rem" }}
          />
          <div>React Developer</div>
        </div>
        <div className="Profiles">
          <img
            src="/images/photo3.jpg"
            alt="logo"
            style={{ height: "40px", padding: "1rem" }}
          />
          <div>Fullstack Developer</div>
        </div>
        <div className="Profiles">
          <img
            src="/images/photo4.jpg"
            alt="logo"
            style={{ height: "40px", padding: "1rem" }}
          />
          <div>React Developer</div>
        </div>
        <div className="Pross">
          <FaAngleDown color="blue" fontSize="2rem" /> <div>See More</div>
        </div>
      </div>
      <div className="MainArea">
        <div className="addStory">
          <div className="story">
            <img
              src="/images/s2.jpg"
              alt="story"
              style={{
                height: "60px",
                width: "60px",
                borderRadius: "60%",
              }}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            Today's Picture
          </div>
          <div className="story">
            <img
              src="/images/s3.jpg"
              alt="story"
              style={{
                height: "60px",
                width: "60px",
                borderRadius: "60%",
              }}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            Flower
          </div>
          <div className="story">
            <img
              src="/images/s4.jpg"
              alt="story"
              style={{
                height: "60px",
                width: "60px",
                borderRadius: "60%",
              }}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            Quotes
          </div>
          <div className="story">
            <img
              src="/images/s1.jpg"
              alt="story"
              style={{
                height: "60px",
                width: "60px",
                borderRadius: "60%",
              }}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            Evening
          </div>

          <div className="message">
            <div className="text">
              <div className="Post">
                <img src="/images/s2.jpg" alt="pic" />
                <input
                  type="Mind"
                  placeholder="What's on your mind, Bharani?"
                />
              </div>
              <div className="call">
                <div className="ico">
                  <div className="icone">
                    <MdVideoCall fontSize="2rem" color="red" />
                    <div>Live Video</div>
                  </div>
                  <div className="icone">
                    <AiFillFileImage fontSize="2rem" color="green" />
                    <div>Photo/Video</div>
                  </div>
                  <div className="icone">
                    <FaGrin fontSize="2rem" color="Orange" />
                    <div> Felling/activity</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Posted">
              <div className="poster">
                <div className="Reactjs">
                  <img
                    src="/images/posted1.jpg"
                    alt="posted"
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                    }}
                  />
                  Simplelearn
                  <div className="update"> Updated his cover image</div>
                </div>
                <br></br>
                <div className="edit">
                  <MdMoreHoriz fontSize="1.5rem" />
                </div>
              </div>
              <div className="caption">
                Please Like, Comment and Subscribe to our YouTube Channel.
              </div>
              <br></br>
              <div className="FacebookImg">
                <img
                  src="/images/posted2.jpg"
                  alt="posted"
                  style={{ height: "70%", width: "70%" }}
                />
              </div>
              <div className="comment">
                <div className="Like">
                  <FaRegThumbsUp color="grey" />
                  Like
                </div>
                <div className="Like">
                  <FaCommentAlt color="grey" />
                  Comment
                </div>
                <div className="Like">
                  <FaRegShareSquare color="grey" />
                  Share
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Lside">
        <div className="Contact">
          <div className="Contacts">Contacts</div>

          <div className="Chaticon">
            <div className="icons">
              <MdVideoCall fontSize="1.8rem" />
            </div>
            <div className="icons">
              <FaSearch fontSize="1.5rem" />
            </div>
            <div className="icons">
              <MdMoreHoriz fontSize="1.6rem" />
            </div>
          </div>
        </div>
      </div>
      <div className="concise">
        <div className="Profilee">
          <img
            src="/images/pic1.jpg"
            alt="logo"
            style={{ height: "35px", width: "35px" }}
          />
          Bharani
        </div>
        <div className="Profilee1">
          <img
            src="/images/pic2.jpg"
            alt="logo"
            style={{ height: "35px", width: "35px" }}
          />
          Abarna
        </div>
        <div className="Profilee1">
          <img
            src="/images/pic4.jpg"
            alt="logo"
            style={{ height: "35px", width: "35px" }}
          />
          Iswariya
        </div>
        <div className="Profilee1">
          <img
            src="/images/1.jpg"
            alt="logo"
            style={{ height: "35px", width: "35px" }}
          />
          RamSiva
        </div>
        <div className="Profilee1">
          <img
            src="/images/pic3.jpg"
            alt="logo"
            style={{ height: "35px", width: "35px" }}
          />
          GajaValli
        </div>
      </div>
    </div>
  );
}
export default MainArea;
