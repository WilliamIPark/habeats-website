import React, { Component } from 'react'
import { H1Alt, BodyAlt } from '../Type';
import MailchimpSubscribe  from 'react-mailchimp-subscribe'
import { FormWrap } from './styled';

const url = "https://twitter.us7.list-manage.com/subscribe/post?u=8e88ef30a7907899857bc61e1&amp;id=3a34ca6586";

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <FormWrap>
      <input
        ref={node => (email = node)}
        type="email"
        placeholder="Enter your email address :)"
        spellCheck="false"
      />
      <button onClick={submit}>
        Remind Me
      </button>
      {status === "error" && <BodyAlt className="form-error" dangerouslySetInnerHTML={{ __html: message }} />}
      {status === "success" && <BodyAlt className="form-success" dangerouslySetInnerHTML={{ __html: message }} />}
    </FormWrap>
  );
};

export default class MailingList extends Component {
  render() {
    return (
      <div>
        <H1Alt>Receive a release reminder?</H1Alt>

        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />

      </div>
    )
  }
}
