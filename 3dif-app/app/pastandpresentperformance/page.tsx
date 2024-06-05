import React from 'react'
import { Container, SimpleGrid } from '@mantine/core'

import styles from './page.module.css'

export default function pastandpresentperformance() {
  return (
    <Layout>
        <Container>
            <SimpleGrid cols={3}>
                <div className={styles.perfInner}>Past Performance<br/>Prime — 541611</div>
                <div className={styles.perfInner}>Current Performance<br/>Subcontractor - 561110</div>
                <div className={styles.perfInner}>Current Performance<br/>Subcontractor - 541612</div>

            </SimpleGrid>
        <table className={styles.perfTable}>
            <tbody>
            <tr>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <td><div className={styles.perfInner}><b>Administrative &amp; Back Oﬃce Support Services</b></div></td>
                <td><div className={styles.perfInner}><b>Technical Services PEER Review</b></div></td>
                <td><div className={styles.perfInner}><b>Human Capital<br/>Operational Support</b></div></td>
            </tr>
            <tr>
                <td><div className={styles.perfInner}>Technical Computer Support</div></td>
                <td><div className={styles.perfInner}>Support Activities for Scientiﬁc Review &amp; Planning</div></td>
                <td><div className={styles.perfInner}>Customer Service Center</div></td>
            </tr>
            <tr>
                <td><div className={styles.perfInner}>Project Planning &amp; Development</div></td>
                <td><div className={styles.perfInner}>Document Management</div></td>
                <td><div className={styles.perfInner}>eOPF, Management &amp; Validation</div></td>
            </tr>
            <tr>
                <td><div className={styles.perfInner}>Research &amp; Development</div></td>
                <td><div className={styles.perfInner}>Administrative &amp; Logistical Support</div></td>
                <td><div className={styles.perfInner}>Orientation | New Hire | Benefits</div></td>
            </tr>
            <tr>
                <td><div className={styles.perfInner}>Back Office Support</div></td>
                <td><div className={styles.perfInner}>Data Entry &amp; Uploads</div></td>
                <td><div className={styles.perfInner}>Payroll | Personnel Action | Benefits</div></td>
            </tr>
            <tr>
                <td><div className={styles.perfInner}>Event Planning &amp; Coordination</div></td>
                <td><div className={styles.perfInner}>Quality Control &amp; Review</div></td>
                <td><div className={styles.perfInner}>Workflow &amp; Desktop Aides Procedure Project</div></td>
            </tr>	
            </tbody>
        </table>
        </Container>
    </Layout>
  )
}
