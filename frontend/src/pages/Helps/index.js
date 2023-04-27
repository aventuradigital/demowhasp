import React, { useState, useEffect } from "react";

import {
	makeStyles,
	Paper
} from "@material-ui/core";

import MainContainer from "../../components/MainContainer";
import MainHeader from "../../components/MainHeader";
import MainHeaderButtonsWrapper from "../../components/MainHeaderButtonsWrapper";
import Title from "../../components/Title";
import { i18n } from "../../translate/i18n";
import useHelps from "../../hooks/useHelps";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import YouTube from 'react-youtube';

const useStyles = makeStyles(theme => ({
	mainPaper: {
		width: '100%',
		minHeight: '200px',
		overflowY: "scroll",
		...theme.scrollbarStyles,
	},
	heading: {
	  fontSize: theme.typography.pxToRem(15),
	  flexBasis: '33.33%',
	  flexShrink: 0,
	},
	secondaryHeading: {
	  fontSize: theme.typography.pxToRem(15),
	  color: theme.palette.text.secondary,
	}
}));

const Helps = () => {
	const classes = useStyles();

	const [records, setRecords] = useState([]);
	const { list } = useHelps()

	useEffect(() => {
		async function fetchData() {
			const helps = await list()
			setRecords(helps)
		}
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const renderVideo = (record) => {
		const url = `https://www.youtube.com/embed/${record.video}`;
	
		const handleLoad = (event) => {
			event.target.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo' }), '*');
		}
	
		return (
			<>
				<iframe
					style={{ width: 700, height: 500 }}
					src={url}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					onLoad={handleLoad}
				/>
				<a href={`https://www.youtube.com/watch?v=${record.video}`} target="_blank" rel="noopener noreferrer">
					<button>Ver Video en YouTube</button>
				</a>
			</>
		);			
			
	}

	const renderHelps = () => {
		return <>
			{ records.length ? records.map((record, key) => (
				<Accordion key={key}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography className={classes.heading}>{ record.title }</Typography>
          				<Typography className={classes.secondaryHeading}>{ record.description }</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>{ renderVideo(record) }</Typography>
					</AccordionDetails>
				</Accordion>
			)) : null }
		</>
	}

	return (
		<MainContainer>
			<MainHeader>
				<Title>{i18n.t("helps.title")}</Title>
				<MainHeaderButtonsWrapper>
				</MainHeaderButtonsWrapper>
			</MainHeader>
			<Paper className={classes.mainPaper} variant="outlined">
				{ renderHelps() }
			</Paper>
		</MainContainer>
	);
};

export default Helps;
