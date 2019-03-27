import React from 'react'
import H2Styled from './../styled/H2Styled'
import H3Styled from './../styled/H3Styled'
import PStyled from './../styled/PStyled'

const Certificates = ({data}) => (
    <div className="Certificates">
        <div className="Certificates-container">
            <H2Styled name="Certificates" />
            {
                data.map( (cert, index) => (
                    <div className="Certificates-item" key={`Cert-${index}`}>
                        <H3Styled>{cert.name} {cert.institution}
                            <span> {cert.date}</span>
                        </H3Styled>
                        <PStyled name={cert.description} />
                    </div>
                ))
            }

        </div>
    </div>
)

export default Certificates