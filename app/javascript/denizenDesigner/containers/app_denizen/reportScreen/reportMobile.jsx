/* NOTE: This page currently duplicate code due to the collapsable chapter menu that is visible on mobile. If you update the code on this page, you will have to be careful that you update the file reportDesktop in the same locations. The alternative to this would be to create a variable that changes based on screen size, which would allow you to avoid having duplicate code. I did not have time do implement that.
 */

// See reportMain component for base component

import React, { Component } from 'react';
import { Row, Col, Button, Accordion } from 'react-bootstrap';

import ExecutiveSummary from './executiveSummary';
import Introduction from './introduction';
import Overview from './overview';
import ResearchProcess from './researchProcess';
import Demographics from './demographics';
import Summary from './summary';
import Conclusions from './conclusions';
import References from './references';

import Scroll from 'react-scroll';
import Fade from 'react-reveal/Fade';

var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class ReportMobile extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.state = { activeSection: 'Executive Summary' };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }

  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  CollapseMenu() {
    this.myRef.current.click();
  }

  render() {
    const changeActiveSection = (newSection) => {
      this.setState({ activeSection: newSection });
      this.CollapseMenu();
    };

    let activeSection = this.state.activeSection;

    return (
      <Row className='mb-3'>
        <Col sm={3} className='report-col-2'>
          <Fade bottom duration={1500} delay={0} count={1}>
            <ul className='reportChapterList'>
              <li className='reportDownloadButton'>
                <Button className='pl-0 reportDownloadBtn'>
                  <Link className='' target='_blank' download>
                    Download
                  </Link>
                </Button>
              </li>
            </ul>
            <Accordion>
              <Accordion.Toggle
                className='accordianBtn'
                ref={this.myRef}
                eventKey='0'
              >
                <i className='fa fa-chevron-down'> </i>
                {''}
                <span className='ml-1'>{activeSection}</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='0'>
                <ul className='reportChapterList'>
                  <li className='report-li'>
                    <Link
                      activeClass='active'
                      to='executiveSummary'
                      spy={true}
                      smooth={true}
                      duration={500}
                      containerId='containerElement'
                      onClick={() => changeActiveSection('Executive Summary')}
                    >
                      Executive Summary
                    </Link>
                  </li>
                  <li className='report-li'>
                    <Link
                      activeClass='active'
                      to='overview'
                      spy={true}
                      smooth={true}
                      duration={500}
                      containerId='containerElement'
                      onClick={() => changeActiveSection('Overview')}
                    >
                      Overview
                    </Link>
                  </li>
                  <li className='report-li'>
                    <Link
                      activeClass='active'
                      to='introduction'
                      spy={true}
                      smooth={true}
                      duration={500}
                      containerId='containerElement'
                      onClick={() => changeActiveSection('Introduction')}
                    >
                      Introduction
                    </Link>
                  </li>
                  <li className='report-li'>
                    <Link
                      activeClass='active'
                      to='researchProcess'
                      spy={true}
                      smooth={true}
                      duration={500}
                      containerId='containerElement'
                      onClick={() => changeActiveSection('Research Process')}
                    >
                      Research Process
                    </Link>
                  </li>
                  <li className='report-li'>
                    <Link
                      activeClass='active'
                      to='demographics'
                      spy={true}
                      smooth={true}
                      duration={500}
                      containerId='containerElement'
                      onClick={() => changeActiveSection('Demographics')}
                    >
                      Demographics
                    </Link>
                  </li>
                  <li className='report-li'>
                    <Link
                      activeClass='active'
                      to='summary'
                      spy={true}
                      smooth={true}
                      duration={500}
                      containerId='containerElement'
                      onClick={() =>
                        changeActiveSection('Summary & Key Findings')
                      }
                    >
                      Summary & Key Findings
                    </Link>
                  </li>
                  <li className='report-li '>
                    <Link
                      activeClass='active'
                      to='conclusions'
                      spy={true}
                      smooth={true}
                      duration={500}
                      containerId='containerElement'
                      onClick={() =>
                        changeActiveSection('Conclusions & Key Recommendations')
                      }
                    >
                      Conclusions & Key Recommendations
                    </Link>
                  </li>
                  <li className='report-li '>
                    <Link
                      activeClass='active'
                      to='references'
                      spy={true}
                      smooth={true}
                      duration={500}
                      containerId='containerElement'
                      onClick={() => changeActiveSection('References')}
                    >
                      References
                    </Link>
                  </li>
                  {/* ****************************************************** */}
                </ul>
              </Accordion.Collapse>
            </Accordion>
          </Fade>
        </Col>
        <Col sm={9} className='report-col-9'>
          <Fade duration={1500} delay={1000} count={1}>
            <Element
              name='test7'
              className='report-container'
              id='containerElement'
              style={{
                width: '100%',
                overflow: 'scroll',
              }}
            >
              <ExecutiveSummary />
              <Overview />
              <Introduction />
              <ResearchProcess />
              <Demographics />
              <Summary />
              <Conclusions />
              <References />
            </Element>
          </Fade>
        </Col>
      </Row>
    );
  }
}

export default ReportMobile;
