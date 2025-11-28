export const DOCUMENT_TEMPLATES = [
    {
        id: "rti",
        name: "RTI Application",
        description: "Application under Right to Information Act, 2005 to request information from a public authority.",
        fields: [
            { name: "applicantName", label: "Applicant Name", type: "text" },
            { name: "address", label: "Applicant Address", type: "textarea" },
            { name: "publicAuthority", label: "Public Authority (Department)", type: "text" },
            { name: "informationNeeded", label: "Details of Information Required", type: "textarea" },
            { name: "period", label: "Period of Information", type: "text", placeholder: "e.g., 2023-2024" }
        ],
        generate: (data) => `
To,
The Public Information Officer (PIO),
${data.publicAuthority}

Subject: Application under Right to Information Act, 2005.

Sir/Madam,

I, ${data.applicantName}, a citizen of India, request you to kindly provide the following information:

1. Details of Information Required:
${data.informationNeeded}

2. Period for which information is required: ${data.period}

3. I state that the information sought does not fall within the restrictions contained in Section 8 and 9 of the Act and to the best of my knowledge it pertains to your office.

4. I have deposited the requisite fee of Rs. 10/- via [Mode of Payment].

Applicant Details:
Name: ${data.applicantName}
Address: ${data.address}
Date: ${new Date().toLocaleDateString()}

Signature: _________________
        `
    },
    {
        id: "consumer_complaint",
        name: "Consumer Complaint",
        description: "Formal complaint to the Consumer Disputes Redressal Commission for defective goods or services.",
        fields: [
            { name: "complainantName", label: "Complainant Name", type: "text" },
            { name: "oppositeParty", label: "Opposite Party (Company/Person)", type: "text" },
            { name: "productDetails", label: "Product/Service Details", type: "text" },
            { name: "invoiceNo", label: "Invoice/Bill Number", type: "text" },
            { name: "defect", label: "Nature of Defect/Issue", type: "textarea" },
            { name: "reliefSought", label: "Relief Sought (Refund/Replacement)", type: "text" }
        ],
        generate: (data) => `
BEFORE THE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION

Complaint No. _______ of ${new Date().getFullYear()}

IN THE MATTER OF:

${data.complainantName}
(Complainant)

VERSUS

${data.oppositeParty}
(Opposite Party)

SUBJECT: COMPLAINT UNDER CONSUMER PROTECTION ACT, 2019

Respectfully Sheweth:

1. That the Complainant purchased ${data.productDetails} from the Opposite Party vide Invoice No. ${data.invoiceNo} dated __________.

2. That the said product/service turned out to be defective/deficient as follows:
${data.defect}

3. That the Complainant approached the Opposite Party multiple times but received no satisfactory response.

4. That the Complainant has suffered mental agony and financial loss due to the deficiency in service/unfair trade practice.

PRAYER:

It is therefore prayed that this Hon'ble Commission may kindly direct the Opposite Party to:
a) ${data.reliefSought}
b) Pay compensation for harassment and litigation costs.

Complainant: ${data.complainantName}
Date: ${new Date().toLocaleDateString()}

Verification:
I, ${data.complainantName}, do hereby verify that the contents of this complaint are true to my knowledge.
        `
    },
    {
        id: "rent_agreement",
        name: "Rent Agreement (11 Months)",
        description: "Standard residential rental agreement between Landlord and Tenant.",
        fields: [
            { name: "landlordName", label: "Landlord Name", type: "text" },
            { name: "tenantName", label: "Tenant Name", type: "text" },
            { name: "propertyAddress", label: "Property Address", type: "textarea" },
            { name: "rentAmount", label: "Monthly Rent (Rs.)", type: "number" },
            { name: "securityDeposit", label: "Security Deposit (Rs.)", type: "number" },
            { name: "startDate", label: "Lease Start Date", type: "date" }
        ],
        generate: (data) => `
RENT AGREEMENT

This Rent Agreement is made on this ${new Date().toLocaleDateString()} at ____________ between:

${data.landlordName} (hereinafter called the "LESSOR")
AND
${data.tenantName} (hereinafter called the "LESSEE")

WHEREAS the Lessor is the owner of the property situated at:
${data.propertyAddress}

AND WHEREAS the Lessee has approached the Lessor to take the said property on rent for residential purposes.

NOW THIS AGREEMENT WITNESSETH AS UNDER:

1. That the lease is granted for a period of 11 months commencing from ${data.startDate}.

2. That the Lessee shall pay a monthly rent of Rs. ${data.rentAmount}/- to the Lessor by the 7th of every month.

3. That the Lessee has paid an interest-free refundable security deposit of Rs. ${data.securityDeposit}/-.

4. That the Lessee shall pay electricity and water charges as per actual consumption.

5. That the Lessee shall not sublet the premises or use it for commercial purposes.

6. That either party can terminate this agreement by giving one month's notice in writing.

IN WITNESS WHEREOF, the parties have signed this agreement on the date mentioned above.

Lessor: _________________ (${data.landlordName})

Lessee: _________________ (${data.tenantName})
        `
    }
];
