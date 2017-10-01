import React, { Component } from 'react'
import ProjectSection from './ProjectSection'
import { ProjectBasics } from './ProjectBasics'
import capsuleImage from '.././assets/capsule_image_1.png'
import capsuleImage2 from '.././assets/capsule_image_2.png'
import capsuleImage3 from '.././assets/capsule_image_3.png'
import capsuleImage4 from '.././assets/capsule_image_4.png'
import capsuleImage5 from '.././assets/capsule_image_5.png'
import capsuleImage6 from '.././assets/capsule_image_6.png'
import capsuleImage7 from '.././assets/capsule7.png'
import yogaVideo from '.././assets/yoga_video.png'
import mediaLayers from '.././assets/group4.png'
import capsuleIcon from '.././assets/capsule_logo.png'
import onionIcon from '.././assets/onion.png'
import onionHeadline1 from '.././assets/onion_headline_1.png'
import onionHeadline2 from '.././assets/onion_headline_2.png'
import onionHeadline3 from '.././assets/onion_headline_3.png'
import onionHeadline4 from '.././assets/onion_headline_4.png'
import onionHeadline5 from '.././assets/onion_headline_5.png'
import onionHeadline6 from '.././assets/onion_headline_6.png'
import onionHeadline7 from '.././assets/onion_headline_7.png'
import onionHeadline8 from '.././assets/onion_headline_8.png'
import onionHeadline9 from '.././assets/onion_headline_9.png'
import onionHeadline10 from '.././assets/onion_headline_10.png'


class Onion extends Component {
    render() {
        const onionLink = (link, headline, color) => (
            <div>
            {link 
                ? <a className='project-link onion' href={link} style={{color: color ? color : 'white'}}>
                    &#8226;&nbsp;{headline}
                </a>
                : <div className='project-link onion' style={{color: color ? color : 'white'}}>
                    &#8226;&nbsp;{headline}
                </div>
            }
            </div>
        )
        const onion1 = (
            <div>
            {onionLink('http://www.theonion.com/article/10-year-old-wishes-unemployed-father-couldnt-make--32220', 
            `10-Year-Old Wishes Unemployed Father Couldn't Make It To Just One Of His Little League Games`)}
            {onionLink('https://www.facebook.com/TheOnion/posts/10151511221979497', 
            `White-Collar Criminal Reintroduced to High Society`)}
            {onionLink('https://twitter.com/theonion/status/441336134153416704', 
            `Wrinkled Dollar Bill Treated To Full-Body Massage on Edge of Vending Machine`)}
            </div>
        )
        const onion2 = (
            <div>
            {onionLink('http://www.theonion.com/article/woman-rushed-into-cosmetic-surgery-with-8-glaring--31373', 
            `Woman Rushed Into Cosmetic Surgery With 8 Glaring Flaws`, 'rgb(25, 25, 112)')}
            {onionLink('http://www.theonion.com/article/woman-rushed-into-cosmetic-surgery-with-8-glaring--31373', 
            `Lifelong Dream No Match For First Brush With Adversity`, 'rgb(25, 25, 112)')}
            {onionLink('https://twitter.com/theonion/status/429378235407667200', 
            `Bar 8.5% Alcoholics By Volume`, 'rgb(25, 25, 112)')}
            </div>
        )
        const onion3 = (
            <div>
            {onionLink('http://www.theonion.com/graphic/area-mans-life-comes-to-tragic-middle-37435', 
            `Area Man's Life Comes to Tragic Middle`)}
            {onionLink('', 
            `IKEA Store Accidentally Built With Food Court Upside Down (unpublished)`)}
            {onionLink('', 
            `Spider Killed With Least Favorite Book`)}
            </div>
        )
        const onion4 = (
            <div>
            {onionLink('http://www.theonion.com/article/new-doctors-without-licenses-program-provides-inco-35363', 
            `New 'Doctors Without Licenses' Program Provides Incompetent Medical Care To Refugees`, 'rgb(25, 25, 112)')}
            {onionLink('', 
            `Tow Truck Driver Loves When They Come Running Out Of Buildings With Arms Flailing (unpublished)`, 'rgb(25, 25, 112)')}
            {onionLink('', 
            `God Forced To Evict Deadbeat Angel Who Wrote Him Bad Check (unpublished)`, 'rgb(25, 25, 112)')}
            </div>
        )
        const onion5 = (
            <div>
            {onionLink('http://www.theonion.com/article/motorcyclist-salvaged-parts-50814', 
            `Motorcyclist Salvaged For Parts`)}
            {onionLink('', 
            `Cochlear Implant Allows Deaf Child To Hear Sound Of Air Horn For First Time (unpublished)`)}
            {onionLink('', 
            `Book Report Leaning Heavily On Back Cover Synopsis (unpublished)`)}
            </div>
        )
        const onion6 = (
            <div>
            {onionLink('http://www.theonion.com/article/dementia-study-reveals-fond-memories-first-go-50670', 
            `Dementia Study Reveals Fond Memories First To Go`, 'rgb(25, 25, 112)')}
            {onionLink('', 
            `Variety Pack Down To Terrible Flavors That Necessitated Variety Pack (unpublished)`, 'rgb(25, 25, 112)')}
            {onionLink('', 
            `SAT Tutor Feigns Disbelief At Student's Rejection From Stanford (unpublished)`, 'rgb(25, 25, 112)')}
            </div>
        )
        const onion7 = (
            <div>
            {onionLink('http://www.theonion.com/article/gm-announces-plans-recall-driverless-car-2021-50527', 
            `GM Announces Plans To Recall Driverless Car By 2021`)}
            {onionLink('', 
            `Mom Apparently Born With Innate Ability To Sew Costumes For School Play (unpublished)`)}
            {onionLink('', 
            `Police Issue Amber Alert For 7-Year-Old Temptress (unpublished)`)}
            </div>
        )
        const onion8 = (
            <div>
            {onionLink('http://www.theonion.com/graphic/middle-aged-funeral-director-buys-flashy-red-hears-32241', 
            `Middle-Aged Funeral Director Buys Flashy Red Hearse`, 'rgb(25, 25, 112)')}
            {onionLink('', 
            `Cubicle Infinitely More Depressing Once Personalized (unpublished)`, 'rgb(25, 25, 112)')}
            {onionLink('', 
            `Bathroom Sink Caked In Personal Hygiene (unpublished)`, 'rgb(25, 25, 112)')}
            </div>
        )
        const onion9 = (
            <div>
            {onionLink('http://www.theonion.com/graphic/exasperated-shark-cant-believe-it-traveled-3-miles-32048', 
            `Exasperated Shark Can't Believe It Traveled 3 Miles For Single Drop of Blood`)}
            {onionLink('', 
            `McDonald's Customer Finds A Few Loose Hamburgers At Bottom of Bag (unpublished)`)}
            {onionLink('', 
            `Parents Vow To Support Son No Matter What Type Of Medicine He Chooses To Practice (unpublished)`)}
            </div>
        )
        const onion10 = (
            <div>
            {onionLink('http://www.theonion.com/article/man-commits-new-tv-show-just-hours-after-getting-o-50488', 
            `Man Commits To New TV Show Just Hours After Getting Out Of 7-Season Series`, 'rgb(25, 25, 112)')}
            {onionLink('', 
            `XBOX One Hardware Defect Forces Microsoft To Push Back Holidays (unpublished)`, 'rgb(25, 25, 112)')}
            {onionLink('', 
            `First Class Passengers Given Better Oxygen Masks (unpublished)`, 'rgb(25, 25, 112)')}
            </div>
        )

        const onion_primer = (
            <div>
                <p className='portfolio-text'>
                <em>The Onion</em> was the first environment where I learned to care deeply about the product I was building. Because <em>The Onion</em>'s bar for quality is so high, every day was an education in placing <em>The Onion</em>'s needs above my own need for ego gratification. Weeks when I spent dozens of hours putting together a headline list only to 
                be shut out during the selection meeting (when zero headlines make it past the first round of cuts), were almost viscerally painful in my first few months. I gradually came to appreciate writers' ruthlessness for protecting The Onion's brand. No writer would ever sign off on a joke simply to
                save me from the embarrassment of a shut-out, nor would writers ever sign off on hilarious jokes that did not fit The Onion's voice. This zeal for maintaining <em>The Onion</em>'s voice is what has kept it consistently great for close to thirty years, and if that greatness sometimes must come at the expense of writers' feelings, that seems like a small price to pay. 
                </p>
                <p className='portfolio-text'>
                    An outside observer, upon learning that I spent three years doing little else besides writing satire and am now a Web developer, might reasonably conclude that I misdirected my energy and wasted my time. But even if the only lesson that translates over from <em>The Onion</em> over to Web development is that ego is a casualty of great product-building, this is such a valuable and essential lesson that I would judge those three years well-spent.
                </p>
                <p className='portfolio-text'>
                    In building side projects for myself or products for a client, I often feel an impulse towards developing a particular feature even though there is no data to support its creation.  I am comfortable testing new features, but I am equally comfortable axing them if A/B tests and user interviews do not prove out their utility. When I find myself about to make an ego-driven decision, I recall
                    how many of my jokes I left in the writers' room and, relatedly, how proud I ultimately was of the finished product.
                </p>
            </div>
        )
        
        return (
            <div>
                <div className='page-container'>
                    <div className='post-container'>
                        <div className='top-project-title'>
                            <img src={onionIcon} className='top-project-image' style={{borderRadius: '50px'}} />
                            <div className='post-title' style={{paddingLeft: '5px'}}>The Onion</div>
                        </div>
                        <div className='pullout-description'>
                        Satirical newspaper for which I wrote headlines, articles, features and seer stone-assisted scripture. 
                        </div>
                    </div>
                </div>
                <ProjectBasics
                    styles={{backgroundColor: 'rgba(26, 26, 55, 1)'}}
                    role='Contributing writer on editorial staff of 20+'
                    time={`October 2012 - June 2015 / Enough time to realize this wasn't my bag`}
                    no_code={true}
                    tools='paper, Microsoft Word, blood, digital blood'
                    link='http://www.theonion.com'
                    code='Fork of ISO basic Latin alphabet'
                />
                <ProjectSection
                    styles={{ backgroundColor: 'white', color: 'rgb(25,25,112)'}}
                    title='Reconciling comedy writing with my current career'
                    text={onion_primer}
                />
                <ProjectSection
                    styles={{ backgroundColor: 'rgb(25,25,112)' }}
                    title='Selected work'
                    image={onionHeadline1}
                    image_position='left'
                    text={onion1}
                />
                <ProjectSection
                    styles={{ backgroundColor: 'white', color: 'rgb(25, 25, 112' }}
                    title='Selected work'
                    image={onionHeadline2}
                    image_position='right'
                    text={onion2}
                />
                <ProjectSection
                    styles={{ backgroundColor: 'rgb(25,25,112)' }}
                    title='Selected work'
                    image={onionHeadline3}
                    image_position='left'
                    text={onion3}
                />
                <ProjectSection
                    styles={{ backgroundColor: 'white', color: 'rgb(25,25,112)' }}
                    title='Selected work'
                    image={onionHeadline7}
                    image_position='right'
                    text={onion4}
                />
                <ProjectSection
                    styles={{ backgroundColor: 'rgb(25,25,112)' }}
                    title='Selected work'
                    image={onionHeadline4}
                    image_position='left'
                    text={onion5}
                />
                <ProjectSection
                    styles={{ backgroundColor: 'white', color: 'rgb(25,25,112)' }}
                    title='Selected work'
                    image={onionHeadline5}
                    image_position='right'
                    text={onion6}
                />
                <ProjectSection
                    styles={{ backgroundColor: 'rgb(25,25,112)' }}
                    title='Selected work'
                    image={onionHeadline6}
                    image_position='left'
                    text={onion7}
                />
                <ProjectSection
                    styles={{ backgroundColor: 'white', color: 'rgb(25,25,112)' }}
                    title='Selected work'
                    image={onionHeadline8}
                    image_position='right'
                    text={onion8}
                />
                <ProjectSection
                    styles={{ backgroundColor: 'rgb(25,25,112)' }}
                    title='Selected work'
                    image={onionHeadline9}
                    image_position='left'
                    text={onion9}
                />
                <ProjectSection
                    styles={{ backgroundColor: 'white', color: 'rgb(25,25,112)' }}
                    title='Selected work'
                    image={onionHeadline10}
                    image_position='right'
                    text={onion10}
                />
            </div>
        )
    }
}

export default Onion