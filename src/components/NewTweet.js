import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'
import { Redirect } from 'react-router-dom'

class NewTweet extends Component {
    state = {
        text: '',
        toHome: false
    }

    handleChange = (e) => {
        const text = e.target.value;

        this.setState(() => ({
            text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { text } = this.state;
        const { dispatch, id } = this.props;

        // pass text and id of a tweet we're replying to (if any)
        dispatch(handleAddTweet(text, id))

        // redirect to home when user composes a new tweet, 
        // stay on the page if user replies to a tweet
        this.setState(() => ({
            text: '',
            toHome: id ? false : true
        }))
    }
    render() {
        const { text, toHome } = this.state;

        if (toHome) {
            return <Redirect to='/' />
        }

        const tweetLeft = 280 - text.length;

        return (
            <div>
                <h4 className="center">Compose new Tweet</h4>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="What's happening"
                        value={text}
                        onChange={this.handleChange}
                        className='textarea'
                        maxLength={280}
                    />
                    {tweetLeft <= 100 && (
                        <div className="tweet-length">
                            {tweetLeft}
                        </div>
                    )}
                    <button
                        className="btn"
                        type="submit"
                        disabled={text === ''}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(NewTweet);