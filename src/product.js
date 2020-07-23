import React, { Component } from 'react';
import { render } from '@testing-library/react';
import App from './App';
import LMDirectory from './assets/ch03-data.js';





export default class Client extends Component {
	render() {
		return  (
			<div className="App">
	<div className="content">
		<div className="pagetitle pagetitle_blog">
			<div className="container">
				<div className="gutter clearfix">
					<h5>
						About Leaf &#038; Mortar
					</h5>
				</div>
			</div>
		</div>
		<div className="container">
			<div className="sidebar_right clearfix">
				<section className="pagesection">
					<div className="gutter">
						<article className="singlepost clearfix">
							<div className="at-above-post-page addthis_tool" data-url="http://leafandmortar.com/about-leaf-mortar/">
							</div>
							<h2>
								Company Directory
							</h2>
							<p>Learn more about each person at Leaf & Mortar in this company directory.</p>

							<form action="" id="directory-filters">
								<div className="group">
									<label htmlFor="txt-name">Name:</label>
									<input type="text" name="name" value="" placeholder="Name of employee" id="txt-name" />
								</div>
								<div className="group">
									<label htmlFor="sel-title">Job Title:</label>
									<select name="sel-title" id="sel-title">
										<option value="">- Select -</option>
										<option value="architect">Architect</option>
										<option value="designer">Designer</option>
										<option value="contractor">Contractor</option>
										<option value="staff">Support Staff</option>
									</select>
								</div>
								<div className="group">
									<label><input type="checkbox" value="1" /> Intern</label>
								</div>
							</form>

							<h3>
								Tony Luis Salvador, MLA, Principal Landscape Architect
							</h3>
							<img className=" size-medium wp-image-14 alignright" src={require('./assets/04/tony_salvador-300x300.jpg')} alt="tony_salvador" width="300" height="300"  sizes="(max-width: 300px) 100vw, 300px" />
							<p>
								Tony grew up engulfed by the business of landscape design, working most summers with his father, Roberto, at Leaf &amp; Mortar, and with every passing year he knew more and more that he wanted to walk in his father’s footsteps. Roberto, however, was adamant that Tony attend college before settling upon a career. They compromised and Tony set out to study landscape architecture.  After graduating in the top of his class with both a BLA and MLA from University of Oregon, in Eugene, Tony was ready and excited to commit to the family business. Tony’s contributions have included bringing in various public beautification and sustainable design projects that continue to make Portland a progressive, eco-friendly city, and have put Leaf &amp; Mortar on the map for “Small Local Companies with a Big Heart.”
							</p>
							<h3>
								Ailene McDott, MS, APLD, Landscape Designer
							</h3>
							<img className="alignright size-medium wp-image-10" src={require('./assets/04/Ailene_McDott-300x300.jpg')} alt="Ailene_McDott" width="300" height="300"  sizes="(max-width: 300px) 100vw, 300px" />
							<p>
								Ailene grew up surrounded by green hills and marshlands in Scotland, and although that lush emerald richness is what first enticed her into landscape design, it was, ironically, her interest in water conservation that made her consider it as a serious career.  After completing her undergraduate studies at the University of Glasgow, she moved to California where she received her masters in Ecological Management and Restoration, and began freelancing with various landscape companies. After building up a healthy portfolio of prestigious landscape restoration projects in California’s drought-stricken environment, Ailene was granted membership into the Association of Professional Landscape Designers. Since then, she’s been a key member of our team, and has turned many green yards, into water-friendly rock gardens.
							</p>
							<h3>
								Kristiann Ngu, MFA, APLD, Landscape Designer
							</h3>
							<img className="alignright size-medium wp-image-13"  src={require('./assets/04/kristiann_ng-300x300.jpg')} alt="kristiann_ng" width="300" height="300"  sizes="(max-width: 300px) 100vw, 300px" />
							<p>
								The daughter of a painter mother and a sculptor father, meant Kristiann was destined to be artistic, but what form that would take was a mystery to her family until she was 9. Suddenly, she became interested in the local community gardens, and had her very own plot at the age of 11. Her intricate weavings of local produce, ground covers, and wildflowers became a point of interest in the community. In fact, visitors, in search of gardening and landscape design tips, would swarm to her plot in numbers. By the age of 15, she was speaking at weekend landscape design workshops. Kristiann continued to hone her landscaping skills during summers and breaks away from her MFA program at NYU, and received her APLD shortly after graduation. Kristiann is responsible for designing some of the most exotic and pristine landscapes in the Portland area, where she applies her impressive skills in color and balance to the landscape, like a painter commits paint to the canvas.
							</p>
							<h3>
								Geena Draper, MS, Horticulturist
							</h3>
							<img className="alignright size-medium wp-image-12"  src={require('./assets/04/Geena-Draper-300x300.jpg')} alt="Geena-Draper" width="300" height="300"  sizes="(max-width: 300px) 100vw, 300px" />
							<p>
								There’s no logic that truly explains Geena’s keen interest in plants or her uncanny ability to cultivate original and viable plant stock. Her mother was a banker and her father, an accountant, and most of her siblings work in the finance industry, too. Perhaps the only commonality is that money and plants are both green. In any event, Geena excels at understanding plant growth, creating new and enticing strains of plants that are resistant to disease and drought, and finding or growing the perfect plants for every situation. We are fortunate to have lured Geena away from her work as an educational horticulturist at Portland State University, to her current role as resident plant specialist for Leaf &amp; Mortar.
							</p>
							<h3>
								Arnold Rickshaw, CGP, General Contractor
							</h3>
							<img className="alignright size-medium wp-image-11"  src={require('./assets/04/Arnold_Rickshaw-300x300.jpg')} alt="Arnold_Rickshaw" width="300" height="300"  sizes="(max-width: 300px) 100vw, 300px" />
							<p>
								Arnold has 35 years experience in general and landscape contracting, and is a Certified Green Professional, however the real reason we hired him is that he’s simply the sharpest, nicest, and most conscientious builder we’ve come across in the whole of Portland. Arnold is truly passionate about the building process, yet he cares deeply about the environment and the effects of construction on natural habitat, and has lead a dozen medium to large-scale habitat restoration projects over the length of his career. With Arnold at the helm of our construction crew, you can be assured that the beautiful landscape you desire won’t be gained at the expense of natural habitat or wildlife, but rather, in harmony, with existing natural conditions.
							</p>
							<div className="at-below-post-page addthis_tool" data-url="http://leafandmortar.com/about-leaf-mortar/">
							</div>
							<div className="clear">
							</div>
						</article>
					</div>
				</section>
			</div>
		</div>
	</div>
			</div>
		);
	}
}