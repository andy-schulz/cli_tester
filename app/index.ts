export {TheklaGlobal} from "./lib/globals/TheklaGlobal";
export {TheklaConfig} from "./lib/config/TheklaConfig";

/**
 *  exports from thekla-core
 */

export {ServerConfig, RestClientConfig, DesiredCapabilities} from "thekla-core";


/**
 * WebDriver Wrapper
 */

export {Browser}                          from "thekla-core";
export {BrowserScreenshotData}            from "thekla-core";
export {WebElementFinder}                 from "thekla-core";

export {RunningBrowser} from "thekla-core";
export {ClientHelper}   from "thekla-core";
export {By}             from "thekla-core";
export {Key}            from "thekla-core";
export {until}          from "thekla-core";
export {UntilElement}   from "thekla-core";

export {Utils}                                                       from "thekla-core";

/**
 *
 * Request Wrapper
 *
 */
export {Get}                                                         from "thekla-core";
export {Post}                                                        from "thekla-core";
export {Delete}                                                      from "thekla-core";
export {Send}                                                        from "thekla-core";

export {On}                                                          from "thekla-core";
export {Method}                                                      from "thekla-core";
export {ExecutingRestClient}                                         from "thekla-core";

/**
 * screenplay Elements
 */
export {element, all, frame}                                         from "thekla-core";
export {SppElement, SppElementList}                from "thekla-core";
export {Actor}                                                       from "thekla-core";
export {request, SppRestRequest}                                     from "thekla-core";


// Abilities
export {Ability}                                                from "thekla-core";
export {BrowseTheWeb}                                           from "thekla-core";
export {Authenticate, AuthenticationInfo}                       from "thekla-core";
export {UseTheRestApi}                                          from "thekla-core";

// Tasks
export {PerformsTask, UsesAbilities, LogsActivity, AnswersQuestions}    from "thekla-core/dist/screenplay/Actor";
export {ReturnTaskValue}                                                from "thekla-core"

// Activities
export {Activity, Task, Interaction}     from "thekla-core/dist/screenplay/lib/actions/Activities";
export {Click}                           from "thekla-core/dist/screenplay/web/actions/Click";
export {Hover}                           from "thekla-core/dist/screenplay/web/actions/Hover";
export {Enter}                           from "thekla-core/dist/screenplay/web/actions/Enter";
export {Navigate}                        from "thekla-core/dist/screenplay/web/actions/Navigate";
export {Wait}                            from "thekla-core/dist/screenplay/web/actions/Wait";
export {Scroll, Page}                    from "thekla-core/dist/screenplay/web/actions/Scroll";
export {Sleep}                           from "thekla-core";


// Oracle
export {See}             from "thekla-core";
export {Extract}         from "thekla-core";


/**
 * Questions
 */
// the interface
export {Question}        from "thekla-core";
// Basic Questions
export {ReturnedResult}  from "thekla-core";
// Web Questions
export {Text}            from "thekla-core/dist/screenplay/web/questions/Text";
export {Value}           from "thekla-core/dist/screenplay/web/questions/Value";
export {Attribute}       from "thekla-core/dist/screenplay/web/questions/Attribute";
export {Count}           from "thekla-core/dist/screenplay/web/questions/Count";
export {TheSites}        from "thekla-core/dist/screenplay/web/questions/TheSites";
export {Status}          from "thekla-core/dist/screenplay/web/questions/Status";
// Rest Questions
export {Response}        from "thekla-core";

// Custom Errors
export {DoesNotHave, DidNotFind} from "thekla-core";

//Function Matcher
export {Expected} from "thekla-core";

// Decorators
export {stepDetails, step} from "thekla-core";
