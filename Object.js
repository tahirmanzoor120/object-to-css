module.exports = {
    dashboardCard: {
        background: '#FFFFFF',
        borderRadius: '5px',
        minHeight: '235px',
        minWidth: '225px',
        flex: '1',
        margin: '0.5rem',
        position: 'relative',
        padding: '.75rem .5rem',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        '& .graphDiv': {
            height: '95%',
            margin: '0 auto',
            width: '60%'
        },
        '& .typeHeader': {
            position: 'absolute',
            top: '-30px',
            fontFamily: 'robotoMedium'
        },
        '& select': {
            color: '#80808B',
            border: 'none',
            fontSize: '10px',
            fontFamily: 'roboto',
            outline: 'none'
        },
        '& .dashboardCardHeader': {
            display: 'flex',
            marginBottom: '4px',
            marginTop: '3px',
            cursor: 'auto',
            '& .title': {
                color: '#636675',
                fontSize: '18px',
                lineHeight: '24px',
                fontFamily: 'roboto',
                marginRight: 'auto',
                marginLeft: '10px'
            }
        },
        '& .amountOnCard': {
            width: '100%',
            display: 'flex',
            fontSize: '21px',
            lineHeight: '22px',
            fontFamily: 'robotoMedium',
            // minWidth: 'max-content',
            paddingLeft: '38px',
            height: '25px',
            cursor: 'auto',
            '& .amountDiv': {
                // whiteSpace: 'nowrap',
                // textOverflow: 'ellipsis',
                // overflow: 'hidden',
                '& .amountAfterDecimal': {
                    fontSize: '14px',
                    color: '#B5B7C8',
                    fontFamily: 'roboto'
                }
                // '&:hover': {
                // 	'& .amountDivHover': {
                // 		background: '#212934',
                // 		color: '#FFFFFF',
                // 		position: 'absolute',
                // 		borderRadius: '5px',
                // 		padding: '4px',
                // 		marginLeft: '-4px',
                // 		boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)'
                // 	}
                // },
            } },
        '& .dashboardCardBody': {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textAlign: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            overflowY: 'hidden',
            fontFamily: 'roboto',
            padding: '10px 0px',
            paddingBottom: '2px',
            '& .clusterize-scroll': {
                maxHeight: '100%'
            },
            '& .listDivParent': {
                width: '90%',
                padding: '10px 0',
                textAlign: 'left',
                '& .listDiv': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: '#9198A7',
                    fontSize: '14px',
                    lineHeight: '19px',
                    padding: '6px 0px',
                    '& .itemNameDiv': {
                        width: '136px',
                        position: 'relative',
                        "&:hover": {
                            '& .listItemName': {
                                color: '#FFFFFF',
                                position: 'absolute',
                                whiteSpace: 'normal',
                                background: '#212934',
                                borderRadius: '3px',
                                zIndex: '9',
                                overflow: 'visible',
                                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                                padding: '0px 4px',
                                marginLeft: '-4px'
                            }
                        },
                        '& .listItemName': {
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            width: '100%'
                        }
                    },
                    '& .itemNameDivSmallText': {
                        width: '55%',
                        position: 'relative',
                        '& .listItemName': {
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            width: '100%'
                        }
                    },
                    '& .noOverflowAmount': {
                        textAlign: 'right',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        '& .listAmountDiv': {
                            textAlign: 'right',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap'
                        }
                    },
                    '& .listItemValue': {
                        textAlign: 'right',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        '& .listAmountDiv': {
                            textAlign: 'right',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap'
                        }
                        // '& :hover': {
                        // 	position: 'absolute',
                        // 	right: '0',
                        // 	background: '#212934',
                        // 	color: '#FFFFFF !important',
                        // 	zIndex: '999',
                        // 	padding: '0px 4px',
                        // 	marginRight: '16px',
                        // 	boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                        // 	borderRadius: '3px'
                        // },
                    },
                    '& .greenText': {
                        color: '#08BD7C'
                    },
                    '& .redText': {
                        color: '#F26546'
                    }
                }
            },

            '& .amountOnCard': {
                width: '100%',
                display: 'flex',
                fontSize: '21px',
                lineHeight: '22px',
                whiteSpace: 'nowrap',
                fontFamily: 'robotoMedium',
                paddingLeft: '38px'
            },
            '& .textIfListEmpty': {
                // width: '77%',
                width: '172px',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontFamily: 'roboto',
                lineHeight: '19px',
                color: '#B5B7C8'
            }
        },
        '& .saleOrdersCardBody, & .deliveryChallansCardBody, & .purchaseOrdersCardBody, & .openChequesCardBody': {
            '& .listDiv': {
                marginTop: '10px'
            },
            '& tr td': {
                padding: '10px 0'
            }
        }
    }
}

// Case 1

// module.exports = {
//     dashboardCard: {
//         background: '#FFFFFF',
//         borderRadius: '5px',
//         minHeight: '235px',
//         minWidth: '225px',
//         flex: '1',
//         margin: '0.5rem',
//         position: 'relative',
//         padding: '.75rem .5rem',
//         display: 'flex',
//         flexDirection: 'column',
//     }
// }

// case 2

// module.exports = {
//     dashboardCard: {
//         background: '#FFFFFF',
//         borderRadius: '5px',
//         minHeight: '235px',
//         minWidth: '225px',
//         flex: '1',
//         margin: '0.5rem',
//         position: 'relative',
//         padding: '.75rem .5rem',
//         display: 'flex',
//         flexDirection: 'column',
//         boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
//         '& .graphDiv': {
//             height: '95%',
//             margin: '0 auto',
//             width: '60%'
//         }
//     }
// }