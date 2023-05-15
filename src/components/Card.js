import styled from 'styled-components';

const Section = styled.section`
    width: 264px;
    height: 258px;
    margin: 12px;
    margin-bottom: 12px;
`
const Image = styled.img`
    width: 264px;
    height: 210px;
    border-radius: 15px;
    margin-top: 24px;
`;
const Font = styled.div`
    font-size: 16px;
    font-weight: 800;
`

const Card = () => (
    <Section>
        <Image src="https://s3-alpha-sig.figma.com/img/0667/5181/f3094ffc7267c0cae7239d44537d3a76?Expires=1684713600&Signature=b0uHxOSBwT68ymRFE9MUU5U8p6un2kKOMdPIM8xztr28Oc8C2lSskWgUJQ3lVvm-crCo-kZlbvnIfNngF3HyaDdWVPSd1lbHzbZUtTLPpR45qrxBc8NStsZMS1Shw3dl9oLgenMYaSXtIxTHrEnrGEo13oIQzp56ps9v~0XYyJyBrEo7fetb9QVND7RN66G7RL90XfxU8PWWapP-sKby2AETjdTh74JLf0AbPdXRnHS8wQpO2Fv-Ptm-JstggllctaCk2XdL5F5E62vC1TeiGj5ylB-G7QoL1l6slt0~iIgQQMYEmzUVKfbxQ008dWY-QV2W4Ur1Q9gNrZz7kTDmtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
        <Font>애플워치 스트랩</Font>
    </Section>
)

export default Card;