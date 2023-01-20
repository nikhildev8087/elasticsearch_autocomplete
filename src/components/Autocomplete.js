// import React from "react";


// export default function AutocompleteView({
//     autocompleteResults,
//     autocompletedResults,
//     autocompleteSuggestions,
//     autocompletedSuggestions,
//     className,
//     getItemProps,
//     getMenuProps
//   }) {
//     let index = 0;
//     return (
//       <div
//         {...getMenuProps({
//           className: ["sui-search-box__autocomplete-container", className].join(
//             " "
//           )
//         })}
//       >
//         <>
//           {!!autocompleteSuggestions &&
//             Object.entries(autocompletedSuggestions).map(
//               ([suggestionType, suggestions]) => {
//                 return (
//                   <React.Fragment key={suggestionType}>
//                     {getSuggestionTitle(
//                       suggestionType,
//                       autocompleteSuggestions
//                     ) &&
//                       suggestions.length > 0 && (
//                         <div className="sui-search-box__section-title">
//                           {getSuggestionTitle(
//                             suggestionType,
//                             autocompleteSuggestions
//                           )}
//                         </div>
//                       )}
//                     {suggestions.length > 0 && (
//                       <ul className="sui-search-box__suggestion-list">
//                         {suggestions.map((suggestion) => {
//                           index++;
//                           return (
//                             <li
//                               {...getItemProps({
//                                 key:
//                                   suggestion.suggestion || suggestion.highlight,
//                                 index: index - 1,
//                                 item: suggestion
//                               })}
//                               data-transaction-name="query suggestion"
//                             >
//                               {suggestion.highlight ? (
//                                 <span
//                                   dangerouslySetInnerHTML={{
//                                     __html: suggestion.highlight
//                                   }}
//                                 />
//                               ) : (
//                                 <span>{suggestion.suggestion}</span>
//                               )}
//                             </li>
//                           );
//                         })}
//                       </ul>
//                     )}
//                   </React.Fragment>
//                 );
//               }
//             )}
//           {!!autocompleteResults &&
//             !!autocompletedResults &&
//             typeof autocompleteResults !== "boolean" &&
//             autocompletedResults.length > 0 &&
//             autocompleteResults.sectionTitle && (
//               <div className="sui-search-box__section-title">
//                 {autocompleteResults.sectionTitle}
//               </div>
//             )}
//           {!!autocompleteResults &&
//             !!autocompletedResults &&
//             autocompletedResults.length > 0 && (
//               <ul className="flex flex-col w-[300px]">
//                 {autocompletedResults.map((result) => {
//                   index++;
//                   const titleField =
//                     typeof autocompleteResults === "boolean"
//                       ? null
//                       : autocompleteResults.titleField;
//                   const titleRaw = getRaw(result, titleField);
//                   return (
//                     <li
//                       {...getItemProps({
//                         key: result.id.raw,
//                         index: index - 1,
//                         item: result
//                       })}
//                       className="mb-2 flex space-x-5"
//                     >
//                       <img
//                         className="m-auto flex-shrink-0 max-w-[30px]"
//                         src={result.image.raw}
//                       />
//                       <h5 className="flex-1 text-sm">{titleRaw}</h5>
//                     </li>
//                   );
//                 })}
//               </ul>
//             )}
//         </>
//       </div>
//     );
//   }
