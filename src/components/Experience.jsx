import React from 'react'
import H2Styled from './../styled/H2Styled'
import H3Styled from './../styled/H3Styled'
import PStyled from './../styled/PStyled'

const Experience = ({data}) => (
    <div className="Experience">
        <div className="Experience-container">
            <H2Styled name="Experience" />
            {
                data.map( (exper, index) => (
                    <div className="Experience-item" key={`Exp-${index}`}>
                        <H3Styled>{exper.jobTitle} {exper.company}
                            <span> {exper.startDate} - {exper.endDate}</span>
                        </H3Styled>
                        <PStyled name={exper.jobDescription} />
                    </div>
                ))
            }
            
            
        </div>
    </div>
)

export default Experience