import { Box, styled, useMediaQuery, Modal, Typography } from "@mui/material"
import { NextPage } from "next"
import { useState } from "react"

const tabPolicy = [
  {
    title: "Information We Collect",
    content: <>
      We collect the following categories of your personal information and may sell it to third parties: identifiers, commercial information, internet or other electronic network activity information, geolocation data, and inferences drawn from these categories.<br></br>
      We may collect through the Services both personal information that identifies you and can be used to contact you, and non-personal information, which is data in a form that does not allow direct association with you, which may include technical information, including the IP address through which you are accessing the Services and the unique mobile device ID or virtual unique device identifier for any mobile device you may be using.<br></br>
      Personal Information<br></br>
      Personal information may include, but is not limited to, your name, e-mail address, date of birth, and any personal photo or image representation.<br></br>
      We will collect, use and disclose personal information only as described in this Privacy Policy.<br></br>
      Please note that some non-personal information would be considered a part of your personal information if it were combined with other information in a way that enables you to be identified, but the same information is considered non-personal information when taken alone or combined only with other non-personal information.<br></br>
      Non-Personal Information<br></br>
      Non-personal information, alone, cannot be used to identify or contact you.<br></br>
      We collect non-personal information about your use of VerseHub and includes aggregated information regarding usage of the Apps.<br></br>
      The non-personal information collected may include information related to your mobile device or computer system, including mobile device type, IP address, unique mobile device ID or other device identifiers, Media Access Control (MAC) address, telephone number of mobile device, country of registration.<br></br>
      It may also include browser type, language, Internet Service Provider (ISP), referring and exit pages, time spent, information searched for, time and date stamp, clickstream data, feature usage, game play statistics, scores and achievements, user rankings, time spent playing our games, and other statistics.
    </>
  },
  {
    title: "How We Use Your Information",
    content: <>
      Generally, we use your information to provide you with an efficient and customized experience. For example, we may use information in the following ways:<br></br>
      To send important notices, such as communications about your purchases and changes to this Privacy Policy;<br></br>
      To inform you about new VerseHub products and promote VerseHub products;<br></br>
      To send &quot;push&quot; notifications to your mobile device regarding VerseHub that you have been playing (for example, suggesting that you open the VerseHub to take certain actions);<br></br>
      To provide in-game information regarding player achievements, such as leaderboards;<br></br>
      To provide technical support and respond to inquiries from you;<br></br>
      To prevent fraud and potentially illegal activities;<br></br>
      To help us to develop, deliver and improve the Apps;<br></br>
      For market research purposes that support our efforts to deliver a more valuable service to our community of VerseHub users;<br></br>
      To deliver and target advertising from third parties;<br></br>
      To gather demographic information about VerseHub users in order to more effectively manage the Apps and provide targeted advertising; and<br></br>
      To track clicks or other ad fulfillment metrics.<br></br>
      If we send e-mail or SMS messages to you for the purpose of promoting VerseHub products or services, or those of a third-party partner, we will generally provide you with choices about receiving further such promotional messages. Preferences for &quot;push&quot; notifications may in most cases be adjusted through VerseHub or your mobile device.<br></br>

      Interaction with Game Center or Other 3rd Party Game Services<br></br>
      By registering with your Game Center on your device (&quot;Game Center&quot;), you allow VerseHub INC to access certain information from your profile for that Game Center. The information you allow us to access is affected by the privacy settings you and your friends establish at the Game Center. You can control and find out more about these settings directly from the Game Center. For example, we may access and store some or all of the following information, as allowed by you, the Game Center and your preferences:<br></br>

      Your first and last name;<br></br>
      Your Game Center ID;<br></br>
      The URL of your Game Center profile;<br></br>
      Your user ID number, which is linked to publicly available information such as name and profile photo<br></br>
      The user ID numbers and other public data for your friends;<br></br>
      The login e-mail you provided to that Game Center when you registered; and<br></br>
      Your gender.<br></br>
      By connecting any VerseHub&quot; Product to a Game Center, you consent to our access, use and storage in accordance with this Privacy Policy of any and all of the information that you agreed the Game Center could provide to VerseHub INC. You may be able to specify what information is provided by the Game Center to us by using the privacy settings in your Game Center profile information.<br></br>

      Other<br></br>
      We may offer you the opportunity to provide us with your e-mail address so that we may register you to receive premium support or provide you with special offers from VerseHub INC our partner companies.<br></br>

      VerseHub INC may provide you the opportunity to participate in include sweepstakes or contests (&quot;Promotions&quot;). If you choose to participate in a Promotion, we may request that you provide us with personal information such as your e-mail address or mailing address.<br></br>

      If you request support relating to a VerseHub INC&quot;s product, we may request personal information such as your name and e-mail address and your user name for any SNS&quot;s, if that appears necessary to resolving the problem.<br></br>

      We may also request or receive personal information in other interactions you may have with VerseHub INC.<br></br>

      Cookies and Other Technologies<br></br>
      A cookie is a small string of text that we, or service providers acting on our behalf, send to your computer&quot;s or mobile device&quot;s browser. Other types of cookies exist, but the cookies in the Apps are only used to obtain browser or device-specific information.<br></br>

      Some cookies are necessary to enable a game to function properly and to allow your gameplay experience to continue from one session another. Other cookies can show, for instance, which parts of VerseHub are the most popular, how much time users are spending there, and how they are interacting with the content.<br></br>

      You may have the option to disable cookies by changing the options in your browser to stop accepting cookies or to prompt you before accepting a cookie from the pages you visit. Additionally, you can disable or delete similar data used by browser add-ons, such as Flash cookies, by changing the add-on&quot;s settings or visiting the website of its manufacturer.<br></br>

      Please note that third parties delivering advertisements through the Services may also use cookies or other technologies. Their placement and use of cookies and other technologies will be subject to their own privacy policies and terms and conditions.<br></br>
    </>
  },
  {
    title: "How We Share Your Information",
    content: <>
      With Third-Party Advertising Entities<br></br>
      We accept advertisements from Third Parties ad networks which may be displayed in our Apps. We may share certain information with third-party advertisers, ad networks and ad platforms (&quot;Advertising Entities&quot;) to develop and deliver targeted advertising in the Apps. We may also allow Advertising Entities to collect non-personal information within the Services which they may share with us, including your device identifier, device type, device brand, device model, OS type/version, network type, device language, device locale, and IP address. Advertising Entities may also collect non-personal information related to the performance of the advertisements, such as how many times an advertisement is shown, how long an advertisement is viewed, and any click-throughs of an advertisement. Advertising Entities may collect this information through the use of tracking technologies like browser cookies and web beacons.<br></br>

      With Other Service Providers<br></br>
      To help administer the Apps, we may use third-party service providers. These service providers will have access to your information only to perform the services they have been engaged to perform for us, and they have agreed not to disclose or use it for any other purpose.<br></br>

      Under Special Circumstances<br></br>
      We may disclose information about you to law enforcement officials or private parties as we, in our sole discretion, believe necessary or appropriate to respond to claims and legal process (including but not limited to subpoenas), to protect the property and rights of VerseHub INC or a third party, to protect the safety of any person or to prevent or stop activity we may consider to be illegal or unethical.<br></br>

      In connection with a merger, acquisition, reorganization or sale of assets, or in the event of bankruptcy, we may sell, transfer or otherwise share some or all of VerseHub INC assets, including your personal information.<br></br>
    </>
  },
  {
    title: "Links to Third-Party Websites and Services",
    content: <>
      The Apps may contain links to other websites and online services, including third-party advertisements. If you choose to click through to one of these other websites or online services, please note that any information you may provide will be subject to the privacy policy and other terms and conditions of that websites or service, and not to this Privacy Policy. We do not control third-party websites or services, and the fact that a link to such a website or service appears in the Apps does not mean that we endorse them or have approved their policies or practices relating to user information.<br></br>
      Before providing any information to any third-party website or service, we encourage you to review the privacy policy and other terms and conditions of that website or service. You agree that VerseHub INC will have no liability for any matters relating to a third-party website or service that you provide information to, including their collection and handling of that information.<br></br>
    </>
  },
  {
    title: "Deletion, Modification and Retention of Personal Information",
    content: <>
      If for any reason you wish to delete or modify your Personal Information, please send us an e-mail to: cowitup01@gmail.com with adequate details of your request and we will make reasonable efforts to modify or delete any such Personal Information pursuant to any applicable privacy laws.<br></br>

      Note that unless you instruct us, otherwise we may retain your Personal Information for as long as reasonably required for the purposes for which such Personal Information was collected, including without limitation, for future analytics and analysis, in order to comply with our legal or business requirements or obligations and to resolve disputes or to enforce our Terms, all as permitted under any applicable privacy laws.<br></br>

      Non-personal Information including aggregated and/or anonymous information derived from your use of the Site may remain on our servers indefinitely.<br></br>
    </>
  },
  {
    title: "Non-US Users",
    content: <>
      Information that you provide may be transferred or accessed by entities around the world as described in this Privacy Policy. If you are located outside the United States, you understand that we may transfer personal information to and process it in the United States. If you are located in the European Union, you freely consent to the transfer of personal information outside of the European Union. Your consent to this Privacy Policy followed by your submission of personal information represents your agreement to these transfers.
    </>
  },
  {
    title: "Your Data Protection Rights under the General Data Protection Regulation (GDPR)",
    content: <>
      If you are a resident of the European Economic Area (EEA), you have certain data protection rights. VerseHub INC to take reasonable steps to allow you to correct, amend, delete or limit the use of your Personal Data. If you wish to be informed about what Personal Data we hold about you and if you want it to be removed from our systems, please contact us via: cowitup01@gmail.com<br></br>

      In certain circumstances, you have the following data protection rights:<br></br>

      The right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete.<br></br>
      The right to object. You have the right to object to our processing of your Personal Data.<br></br>
      The right of restriction. You have the right to request that we restrict the processing of your personal information.<br></br>
      The right to withdraw consent. You also have the right to withdraw your consent at any time where VerseHub INC relied on your consent to process your personal information.<br></br>
      Please note that we may ask you to verify your identity before responding to such requests<br></br>
    </>
  },
  {
    title: "Your California Privacy Rights",
    content: <>
      If you are a California resident and VerseHub INC&quot; user, you are entitled to request certain information regarding our disclosure of certain &quot;personal information&quot; (as defined in California Civil Code Section 1798.83) to third parties for their direct marketing purposes. If you are a California resident and have provided us with personal information within the last year, you may make such a request by emailing us at cowitup01@gmail.com and typing the following in the subject line of the e-mail: &quot;California Privacy Rights&quot;.

      Within 30 days of receiving such a request, we will provide a list of the categories of personal information disclosed to third parties for such third parties&quot; direct marketing purposes during the immediately preceding calendar year, along with the names and addresses of these third parties. A request may be made no more than once per calendar year and we are not required to respond to requests made by means other than through the e-mail address above.<br></br>
    </>
  },
  {
    title: "Individual Rights",
    content: <>
      We provide you with the rights described below when you use our Services. Please contact us at cowitup01@gmail.com if you would like to exercise your rights under applicable law.<br></br>

      When we receive an individual rights request from you, please make sure you are ready to verify your identity.<br></br>

      Please be advised that there are limitations to your individual rights. We may limit your individual rights in the following ways:<br></br>

      Where denial of access is required or authorized by law;<br></br>
      When granting access would have a negative impact on other&apos;s privacy;<br></br>
      To protect our rights and properties; and<br></br>
      Where the request is frivolous or burdensome.<br></br>
      Right to withdraw consent.<br></br>
      If we rely on consent to process your personal information, you have the right to withdraw your consent at any time.<br></br>

      A withdrawal of consent will not affect the lawfulness of our processing or the processing of any third parties based on consent before your withdrawal.<br></br>

      For all data processing activities that rely on users&apos; consent, you can withdraw your consent at any time from the &quot;settings&quot; page in our various applications.<br></br>

      Please only note that in the case where you withdraw your consent or where you refuse to consent in the first place, you will still be served with advertising but that may be less relevant to you as it will not be tailored to your interests.<br></br>
    </>
  }
]

const CowItUpPolicyPage: NextPage = () => {
  const width767 = useMediaQuery("(max-width: 767px)")
  const [currentTab, setCurrentTab] = useState<string>("Information We Collect")
  const [openPopup, setOpenPopup] = useState(false);

  return <Wrap>
    {width767 && <Logo><img src="/assets/ciu/logo_ciu.png" /><CowLogo><img src={`/assets/ciu/${width767 ? "icon_ciu_2" : "icon_ciu_3"}.png`} /></CowLogo></Logo>}
    {!width767 && <Box sx={{
      maxWidth: 800,
      padding: "0 15px",
      margin: 'auto',
      "@media (min-width: 1280px)": {
        maxWidth: 1150
      }
    }}><img width={'100%'} src="/assets/ciu/logo_group.png" /></Box>}
    <Inner>
      <Title>privacy policy</Title>
      <Body>
        <Box sx={{
          marginBottom: width767 ? "24px" : "80px"
        }}>
          This Privacy Policy describes how VerseHub INC (referred to in this Privacy Policy as &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) of the associated mobile applications Cow It Up - Match Tiles (the &quot;App&quot;) available for download in the Google Play Store/App Store and its subsidiaries and its affiliates (&quot;Company&quot;, &quot;us&quot;, &quot;we&quot; or &quot; VerseHub INC&quot;) respect the privacy of the users of their mobile applications (&quot;User&quot; or &quot;you&quot;) and are committed to protect the User&apos;s information.<br></br>
          This Privacy Policy explains the types of information we collect, and how we collect, use, disclose, share and protect your information.<br></br>
          We recognize the importance of protecting the information collected about you. Please familiarize yourself with our privacy practices.<br></br>
          If you have any questions, complaints, or comments regarding our privacy statement or policies, please cowitup01@gmail.com .<br></br>
          BY INSTALLING THE APPS ON YOUR MOBILE DEVICE, ENTERING INTO, CONNECTING TO, ACCESSING AND/OR USING THE APPS, YOU AGREE TO THE TERMS AND CONDITIONS SET FORTH IN THIS PRIVACY POLICY, INCLUDING TO THE POSSIBLE COLLECTION AND PROCESSING OF YOUR PERSONAL INFORMATION AND YOU ARE CONSENTING TO THE USE OF COOKIES AND OTHER TRACKING TECHNOLOGIES ON YOUR DEVICE.
          PLEASE NOTE: IF YOU OR, AS APPLICABLE, YOUR LEGAL GUARDIAN, DISAGREE TO ANY TERM PROVIDED HEREIN, YOU MAY NOT INSTALL, ACCESS AND/OR USE THE APPS AND YOU ARE REQUESTED TO PROMPTLY ERASE THEM, AND ANY PART THEREOF, FROM YOUR MOBILE DEVICE.
          If you are under the age of eighteen (18) you hereby represent that your legal guardian has reviewed and agreed to this Privacy Policy.
        </Box>
        <BoxTab>
          <BoxTabLeft>
            {tabPolicy.map((item, index) => (
              <TabLeftItem key={index} active={item.title === currentTab} onClick={() => {
                setCurrentTab(item.title)
                width767 && setOpenPopup(!openPopup)
              }}>{item.title}</TabLeftItem>
            ))}
          </BoxTabLeft>
          {!width767 && <BoxTabRight>{tabPolicy.filter(item => item.title === currentTab)[0].content}</BoxTabRight>}
        </BoxTab>
        <Title>Contact us with any questions</Title>
        <Email><img src="/assets/ciu/email.png" /> cowitup01@gmail.com</Email>
        <Title>Terms of Services</Title>
        <Box>
          These Terms of Service (&quot;ToS&quot;) constitute a legal agreement between the user of our products and services &quot;user&quot; or &quot;you&quot;) and the Company. It applies when a user accesses, uses or visits the associated mobile application available for download in the Google Play Store and other third party app stores, or pre-installed on third party devices (the &quot;App&quot;), and/or the services provided through the Site and the App. In these ToS, the term &quot;Service&quot; means and includes the Site, the App and these services, individually or collectively. We prepared these ToS to help explain the terms that apply to your use of the Service.
        </Box>
        <Subtitle>Consent</Subtitle>
        <Box>By visiting the Site, downloading the App, or otherwise using the Service, you indicate your agreement to be bound by these ToS. If you do not agree with these ToS, you must not use the Service, and uninstall the App if you have already downloaded it.</Box>
        <Subtitle>Privacy Policy</Subtitle>
        <Box>Our Privacy Policy is part of and is governed by these ToS. By agreeing to these ToS, you agree to be bound by the terms of the Privacy Policy and agree that we may use information collected from you in accordance with its terms.</Box>
        <Subtitle>Notice Regarding Dispute Resolution</Subtitle>
        <Box>These ToS contain provisions that govern how claims you and we may have against each other are resolved, including an agreement and obligation to arbitrate disputes, which, subject to limited exceptions, will require you to submit claims you have against us to binding arbitration, unless you opt-out of arbitration as described below. If you do not opt-out of arbitration, you will only be permitted to pursue claims and seek relief (including monetary, injunctive, and declaratory relief) against us on an individual basis, not as part of any class or representative action or proceeding.</Box>
        <Subtitle>Updates to these ToS</Subtitle>
        <Box>We may modify these ToS from time to time. We will notify you of material changes in accordance with applicable laws. If you do not agree with the proposed changes, you should discontinue your use of the Service and uninstall the App. If you continue using the Service after the new terms take effect, you will be bound by the modified ToS</Box>
        <Subtitle>Force Majeure</Subtitle>
        <Box>The Company will not be responsible for any failure to perform its obligations under this TOS due to circumstances beyond its reasonable control including, without limitation, acts of God, war, riot, terrorism, embargoes, acts of civil or military authorities, fire, flood, or accidents.</Box>
        <Subtitle>Independent Contractors.</Subtitle>
        <Box>Nothing in these ToS shall be deemed to create an agency, partnership, joint venture, employer-employee or franchisor-franchisee relationship of any kind between us and any user.</Box>
        <Subtitle>How to Contact Us</Subtitle>
        <Box>If you have any questions or comments, feel free to contact us at cowitup01@gmail.com</Box>
      </Body>
    </Inner>
    <Modal
      open={openPopup}
      onClose={() => setOpenPopup(!openPopup)}
    >
      <BoxPopup>
        <TitlePopup>
          {tabPolicy.filter(item => item.title === currentTab)[0].title}
        </TitlePopup>
        <BodyPopup>{tabPolicy.filter(item => item.title === currentTab)[0].content}</BodyPopup>
      </BoxPopup>
    </Modal>
    <ScrollToTop onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><img src="/assets/ciu/scroll_top.png" /></ScrollToTop>
  </Wrap>
}

export default CowItUpPolicyPage

const Wrap = styled(Box)({
  width: "100%",
  height: "100%",
  // backgroundImage: "url(/assets/ciu/background_policy.png)",
  background: "#91D579",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  textAlign: "center",
})
const Logo = styled(Box)({
  textAlign: "center",
  position: "relative",
  display: "inline-block",
  paddingTop: 24,
  marginBottom: 24,
  "& img": {
    maxWidth: 212,
    "@media (min-width: 768px)": {
      maxWidth: 344
    }
  },
  "@media (min-width: 768px)": {
    paddingTop: 40,
    marginBottom: 64,
  }
})
const CowLogo = styled(Box)({
  position: "absolute",
  left: "calc(100% - 15px)",
  bottom: -50,
  "@media (max-width: 767px)": {
    "& img": {
      maxWidth: 110
    },
    left: "calc(100% - 35px)",
    top: 4,
  }
})
const Inner = styled(Box)({
  maxWidth: 800,
  margin: "auto",
  fontFamily: "Aldo the Apache",
  padding: "0 15px",
  textAlign: "left",
  "@media (min-width: 1280px)": {
    maxWidth: 1150
  }
})
const Title = styled(Box)({
  fontSize: 32,
  color: "#6A2C08",
  marginBottom: 24,
  textAlign: "center",
  fontFamily: "Aldo the Apache",
  "@media (min-width: 768px)": {
    fontSize: 40
  }
})
const Body = styled(Box)({
  fontFamily: "BeVietnamPro",
  fontSize: 14,
  color: "#151515",
  paddingBottom: 40,
  lineHeight: "26px",
  "@media (min-width: 768px)": {
    fontSize: 16,
  }
})
const Email = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginBottom: 40,
  "& img": {
    marginRight: 16,
    "@media (max-width: 767px)": {
      marginBottom: 16
    }
  },
  color: "#151515",
  fontSize: 24,
  fontWeight: 500,
  "@media (min-width: 768px)": {
    flexDirection: "row",
    fontSize: 32,
    marginBottom: 80
  }
})
const Subtitle = styled(Box)({
  fontSize: 24,
  fontWeight: 400,
  color: "#6A2C08",
  fontFamily: "Aldo the Apache",
  margin: "24px 0 16px"
})
const BoxTab = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 10,
  "@media (min-width: 768px)": {
    marginBottom: 80
  }
})
const BoxTabLeft = styled(Box)({
  marginRight: 36,
})
type tabLeftItemProp = {
  active: boolean
}
const TabLeftItem = styled(Box)((props: tabLeftItemProp) => ({
  fontSize: 24,
  marginBottom: 20,
  color: props.active ? "#6A2C08" : "#151515",
  cursor: "pointer",
  fontFamily: "Aldo the Apache",
  "@media (min-width: 768px)": {
    width: 352,
  }
}))
const BoxTabRight = styled(Box)({
  maxWidth: 732,
  borderBottom: "1px solid #6A2C08",
  paddingBottom: 24
})
const BoxPopup = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 396,
  background: "#ffffff",
  padding: "40px 24px",
  color: "#151515",
  maxHeight: 720,
  overflow: "auto",
  border: "2px solid #6C2D08",
  borderRadius: 12,
  "&::-webkit-scrollbar": {
    display: "none"
  },
  "@media (max-width: 767px)": {
    width: "calc(100% - 30px)",
    maxHeight: "70%"
  }
})
const TitlePopup = styled(Typography)({
  fontFamily: "Aldo the Apache",
  marginBottom: 16,
  color: "#151515",
  fontSize: 18,
  textAlign: "center"
})
const BodyPopup = styled(Typography)({
  fontFamily: "BeVietnamPro",
})
const ScrollToTop = styled(Box)({
  position: 'fixed',
  right: 16,
  bottom: 10,
  cursor: 'pointer',
  '& img': {
    maxWidth: 50
  },
  '@media (min-width: 768px)': {
    right: 30,
    bottom: 20,
  }
})