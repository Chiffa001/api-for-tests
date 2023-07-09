const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

const planar = [
    {
        id: 1,
        passportVersionId: 0,
        purpose: "string",
        area: 0,
        cover: "string",
        characteristic: "string",
        interfaceElement: "string",
        amount: 0,
        differentAltitudeMarks: true,
        totalCover: 100,
    },
];

const lawn = [
    {
        id: 1,
        passportVersionId: 1,
        accountingAreaNumber: 12,
        lawnArea: 12,
        lawnType: "asd",
        goodCondition: true,
        satisfactoryCondition: false,
        unsatisfactoryCondition: false,
        differentAltitude: false,
        totalArea: 15,
        totalGoodCondition: 2,
        totalSatisfactoryCondition: 1,
        totalUnsatisfactoryCondition: 3,
    },
];

const capital = [
    {
        id: 1,
        passportVersionId: 0,
        addressBTI: "string",
        getuNOM: "string",
        getuNAD: "string",
        purpose: "string",
        builtArea: 0,
        floors: 0,
        characteristic: "string",
        differentAltitudeMarks: true,
        totalFloors: 0,
    },
];

const tree = [
    {
        id: 0,
        passportVersionId: 0,
        status: "string",
        lotNumber: 0,
        bioGroupNumber: 0,
        plantNumber: 0,
        plantationType: "string",
        lifeForm: "string",
        plantType: "string",
        amountA: 0,
        amountK: 0,
        amountP: 0,
        diameter: 0,
        height: 0,
        age: 0,
        treeCondition: {
            condition: "good",
            conditionExpanded: "well",
        },
        conditionDesc: "string",
        recommendations: "string",
        millionTrees: true,
        exploitationArea: false,
        differentAltitudeMarks: false,
        treesTotal: 0,
        treesAdded: 0,
        treesCorrected: 0,
        treesDeleted: 0,
        bushesTotal: 0,
        bushesAdded: 0,
        bushesCorrected: 0,
        bushesDeleted: 0,
        creepersTotal: 0,
        creepersAdded: 0,
        creepersCorrected: 0,
        creepersDeleted: 0,
        undergrowthTotal: 0,
        undergrowthAdded: 0,
        undergrowthCorrected: 0,
        undergrowthDeleted: 0,
        stumpsTotal: 0,
        stumpsAdded: 0,
        stumpsCorrected: 0,
        stumpsDeleted: 0,
        recordsAmount: 0,
        recordsArea: 0,
        recordsAreaP: 0,
        noSignsOfWeakening: 0,
        weakening: 0,
        strongWeakening: 0,
        shrinking: 0,
        deadWoodThisYear: 0,
        deadWoodPastYears: 0,
        added: 0,
        corrected: 0,
        deleted: 0,
    },
    {
        id: 1,
        passportVersionId: 0,
        status: "string",
        lotNumber: 0,
        bioGroupNumber: 0,
        plantNumber: 0,
        plantationType: "string",
        lifeForm: "string",
        plantType: "string",
        amountA: 0,
        amountK: 0,
        amountP: 0,
        diameter: 0,
        height: 0,
        age: 0,
        treeCondition: {
            condition: "good",
            conditionExpanded: "well",
        },
        conditionDesc: "string",
        recommendations: "string",
        millionTrees: true,
        exploitationArea: false,
        differentAltitudeMarks: false,
        treesTotal: 0,
        treesAdded: 0,
        treesCorrected: 0,
        treesDeleted: 0,
        bushesTotal: 0,
        bushesAdded: 0,
        bushesCorrected: 0,
        bushesDeleted: 0,
        creepersTotal: 0,
        creepersAdded: 0,
        creepersCorrected: 0,
        creepersDeleted: 0,
        undergrowthTotal: 0,
        undergrowthAdded: 0,
        undergrowthCorrected: 0,
        undergrowthDeleted: 0,
        stumpsTotal: 0,
        stumpsAdded: 0,
        stumpsCorrected: 0,
        stumpsDeleted: 0,
        recordsAmount: 0,
        recordsArea: 0,
        recordsAreaP: 0,
        noSignsOfWeakening: 0,
        weakening: 0,
        strongWeakening: 0,
        shrinking: 0,
        deadWoodThisYear: 0,
        deadWoodPastYears: 0,
        added: 0,
        corrected: 0,
        deleted: 0,
    },
];

const baseInfo = {
    id: "1",
    versionId: 1,
    message: "string",
    hiddenComment: "string",
    objectName: "string",
    district: 0,
    area: 0,
    address: "address",
    balanceOwner: 0,
    timelyBalanceOwner: 0,
    supervisingExecutive: "string",
    yardCategory: "string",
    greenAresCategoryByContent: "string",
    urbanGreenSpaces: 0,
    passportYear: {
        value: 2022,
        leap: true,
    },
    approvalDate: "2023-06-09T07:28:06.988Z",
    additionsToGreenSpacesRequired: true,
    differentAltitudeWRC: true,
    generalArea: 0,
    harvestingAreaAll: 0,
    creationType: "string",
    passportType: "string",
    signedPerson: "string",
    synchronizationDateTime: "2023-06-09T07:28:06.988Z",
};

const result = {
    data: [
        ...lawn,
    ],
    totalCount: 82,
};

app.get("*", (_, res) => {
    res.json(baseInfo);
});

app.post("*", (_, res) => {
    res.json(result);
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
