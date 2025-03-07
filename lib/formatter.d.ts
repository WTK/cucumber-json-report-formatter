import { Helper } from './helper';
export declare class Formatter {
    helper: Helper;
    parseCucumberJson(sourceFile: string, outputFile: string): Promise<void>;
    createStepJson(step: any, report: any, ignorePickles: any): {
        keyword: any;
        line: any;
        name: any;
        result: {
            status: string;
            duration: number;
            error_message: null;
        } | undefined;
        embeddings: object[] | undefined;
        match: {
            location: string;
        } | undefined;
    };
    createScenarioJson(feature: any, scenario: any, steps: any, scenarioType: any): {
        description: any;
        id: string;
        keyword: any;
        line: any;
        name: any;
        steps: any;
        tags: any[] | undefined;
        type: any;
    };
    getStepText(stepId: any, report: any, ignoreAmount: any): any;
    getPickleText(pickleStepId: any, pickleJson: any): any;
    getStepResult(stepId: any, report: any, ignoreAmount: any): {
        status: string;
        duration: number;
        error_message: null;
    } | undefined;
    matchStepDefinitions(stepId: any, report: any, ignoreAmount: any): {
        location: string;
    } | undefined;
    getPickleStepIdByStepId(pickleJson: any, stepId: any, ignoreAmount: any): string;
    getTestStepFinishedResult(testStepFinishedJson: any, pickleStepId: any): {
        status: string;
        duration: number;
        error_message: null;
    };
    getStepDefinitionId(testCaseJson: any, pickleStepId: any): string;
    getMatchedStepDefinition(stepDefinitionJson: any, stepDefinitionId: any): {
        location: string;
    };
    getStepAttachments(stepId: any, report: any, ignoreAmount: any): object[] | undefined;
    getAttachments(attachmentsJson: any, pickleStepId: any): object[];
    getTags(tagsJson: any): any[] | undefined;
    getComments(commentsJson: any): any[] | undefined;
    validateReportSchema(reportJson: any): Promise<void>;
}
