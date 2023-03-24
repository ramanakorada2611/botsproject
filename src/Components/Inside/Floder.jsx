import React, {  useState } from "react";
import InboxData from "../../Data/InboxData";
import './Floder.css'

const Folder = () => {
  const [toggle, setToggle] = useState(true);
  const [type, setType] = useState("inbox");
  const [itemId, setItemId] = useState("guid-1");
  return (
    <div>
      <div className="main">
        <div className="section1">
          <h1
            onClick={() => setToggle(!toggle)}
            class="btn btn-primary mb-5"
          >
            Folders ▼
          </h1>
          {toggle && (
            <div class="list-group">
              <h2
                onClick={() => {
                  setType("inbox");
                }}
                class="list-group-item"
              >
                Inbox
              </h2>
              <h2
                onClick={() => {
                  setType("junk");
                }}
                class="list-group-item"
              >
                Junk Email
              </h2>
              <h2
                onClick={() => {
                  setType("draft");
                }}
                class="list-group-item"
              >
                Drafts
              </h2>
              <h2
                onClick={() => {
                  setType("sent");
                }}
                class="list-group-item"
              >
                Sent Items
              </h2>
              <h2
                onClick={() => {
                  setType("delete");
                }}
                class="list-group-item"
              >
                Deleted Items
              </h2>
            </div>
          )}
        </div>
        <div className="section2">
          {InboxData && type === "inbox"
            ? InboxData.inbox.map((data) => (
                <div
                  className="box"
                  onClick={() => {
                    setItemId(data.mId);
                  }}
                >
                  <h3 id={data.mID} className="subject" key={data.mId}>
                    {data.subject}
                  </h3>
                  <div className="content">
                    {data.content.length > 150
                      ? data.content.slice(0, 147) + "..."
                      : data.content}
                  </div>
                  <div className="divider"></div>
                </div>
              ))
            : InboxData && type === "junk"
            ? InboxData.junk.map((data) => (
                <div
                  className="box"
                  onClick={() => {
                    setItemId(data.mId);
                  }}
                >
                  <h3 id={data.mId} className="subject" key={data.mId}>
                    {data.subject}
                  </h3>
                  <div className="content">
                    {data.content.length > 150
                      ? data.content.slice(0, 147) + "..."
                      : data.content}
                  </div>
                  <div className="divider"></div>
                </div>
              ))
            : InboxData && type === "draft"
            ? InboxData.draft.map((data) => (
                <div
                  className="box"
                  onClick={() => {
                    setItemId(data.mId);
                  }}
                >
                  <h3 className="subject" key={data.mId}>
                    {data.subject}
                  </h3>
                  <div className="content">
                    {data.content.length > 150
                      ? data.content.slice(0, 147) + "..."
                      : data.content}
                  </div>
                  <div className="divider"></div>
                </div>
              ))
            : InboxData && type === "sent"
            ? InboxData.sent.map((data) => (
                <div
                  className="box"
                  onClick={() => {
                    setItemId(data.mId);
                  }}
                >
                  <h3 className="subject" key={data.mId}>
                    {data.subject}
                  </h3>
                  <div className="content">
                    {data.content.length > 150
                      ? data.content.slice(0, 147) + "..."
                      : data.content}
                  </div>
                  <div className="divider"></div>
                </div>
              ))
            : InboxData && type === "delete"
            ? InboxData.delete.map((data) => (
                <div
                  className="box"
                  onClick={() => {
                    setItemId(data.mId);
                  }}
                >
                  <h3 className="subject" key={data.mId}>
                    {data.subject}
                  </h3>
                  <div className="content">
                    {data.content.length > 150
                      ? data.content.slice(0, 147) + "..."
                      : data.content}
                  </div>
                  <div className="divider"></div>
                </div>
              ))
            : ""}
        </div>
        <div className="section3">
          <div className="fullContent">
            {InboxData &&
            InboxData.inbox &&
            InboxData.inbox.find((o) => o.mId === itemId) ? (
              <>
                <h1 className="fullContentHeading">
                  {InboxData.inbox.find((o) => o.mId === itemId).subject}
                </h1>
                <div className="fullContentContent">
                  {InboxData.inbox.find((o) => o.mId === itemId).content}
                </div>
              </>
            ) : 
            InboxData &&
            InboxData.junk &&
            InboxData.junk.find((o) => o.mId === itemId) ? (
              <>
                <h1 className="fullContentHeading">
                  {InboxData.junk.find((o) => o.mId === itemId).subject}
                </h1>
                <div className="fullContentContent">
                  {InboxData.junk.find((o) => o.mId === itemId).content}
                </div>
              </>
            ) : 
            InboxData &&
            InboxData.draft &&
            InboxData.draft.find((o) => o.mId === itemId) ? (
              <>
                <h1 className="fullContentHeading">
                  {InboxData.draft.find((o) => o.mId === itemId).subject}
                </h1>
                <div className="fullContentContent">
                  {InboxData.draft.find((o) => o.mId === itemId).content}
                </div>
              </>
            ) : 
            InboxData &&
            InboxData.sent &&
            InboxData.sent.find((o) => o.mId === itemId) ? (
              <>
                <h1 className="fullContentHeading">
                  {InboxData.sent.find((o) => o.mId === itemId).subject}
                </h1>
                <div className="fullContentContent">
                  {InboxData.sent.find((o) => o.mId === itemId).content}
                </div>
              </>
            ) : 
            InboxData &&
            InboxData.delete &&
            InboxData.delete.find((o) => o.mId === itemId) ? (
              <>
                <h1 className="fullContentHeading">
                  {InboxData.delete.find((o) => o.mId === itemId).subject}
                </h1>
                <div className="fullContentContent">
                  {InboxData.delete.find((o) => o.mId === itemId).content}
                </div>
              </>
            ) : 
              ""
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folder;