import React, {Component} from 'react'
import classInfoTwitts from './InfoTwitts.module.css'

class InfoTwitts extends Component {
	render() {
		return (
			<div className={classInfoTwitts.InfoTwitts}>
				<ul>
					<li>Total number of tweets received ---------</li>
					<li>Average tweets per hour/minute/second ------------</li>
					{/*<li>Top emojis in tweets</li>*/}
					{/*<li>Percent of tweets that contains emojis</li>*/}
					{/*<li>Top hashtags</li>*/}
					{/*<li>Percent of tweets that contain a url</li>*/}
					{/*<li>Percent of tweets that contain a photo url (pic.twitter.comor instagram)</li>*/}
					{/*<li>Top domains of urls in tweets</li>*/}
				</ul>
			</div>
		)
	}
}

export default InfoTwitts

