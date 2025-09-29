/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  type EventApi,
  type DateSelectArg,
  type EventClickArg,
  type EventContentArg,
} from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import MyDialog from "../../components/ui/Dialog";
import DeleteDialog from "../../components/ui/DeleteDialog";

const Calendar: React.FC = () => {
  const theme = useTheme();
  const colors = tokens({ mode: theme.palette.mode });

  // Open Close Dialogs
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectInfo, setSelectInfo] = useState<DateSelectArg | null>(null);
  const [eventInfo, setEventInfo] = useState<EventApi | null>(null);

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };
  const closeDeleteDialog = () => {
    setDeleteOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Handle Form Submit And Add Event
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const title = formJson.title;
    if (selectInfo && title) {
      const calendarApi = selectInfo.view.calendar;
      calendarApi.addEvent({
        id: String(Date.now()),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
    handleClose();
  };
  // Handle Delete Event
  const handleDeleteSubmit = (isDelete: boolean) => {
    if (isDelete && selectInfo) {
      eventInfo?.remove();
      closeDeleteDialog();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        "& .fc-direction-ltr": {
          maxHeight: "calc(100vh - 64px) !important",
          paddingBottom: "20px !important",
          overflowY: "auto",
        },
        "& .fc .fc-timegrid-slot": {
          height: "4em",
        },
      }}
    >
      <MyDialog
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />

      <DeleteDialog
        open={deleteOpen}
        handleClose={() => setDeleteOpen(false)}
        handleSubmit={handleDeleteSubmit}
      />
      <Box
        sx={{
          flex: 1,
          maxHeight: "75vh",
          "& .fc-h-event .fc-event-main": {
            textAlign: "center",
            fontSize: "14px",
            padding: "5px",
            color: "white",
            backgroundColor: colors.blueAccent[700],
            border: "0",
            outline: "none",
            borderRadius: "5px",
          },
          "& .fc-direction-ltr .fc-daygrid-event.fc-event-end, .fc-direction-rtl .fc-daygrid-event.fc-event-start":
            {
              borderRadius: "0px",
              border: "0px",
              background: "transparent !important",
            },
          "& .fc .fc-daygrid-day.fc-day-today": {
            backgroundColor: colors.grey[700] + "!important",
          },
        }}
      >
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={false}
          dayMaxEvents={true}
          weekends={true}
          initialEvents={[]}
          select={(e) => {
            handleClickOpen();
            setSelectInfo(e);
          }}
          eventContent={renderEventContent}
          eventClick={(e) => {
            handleDeleteOpen();
            setEventInfo(e.event);
          }}
        />
      </Box>
    </Box>
  );
};

function renderEventContent(eventContent: EventContentArg) {
  return (
    <>
      <b>{eventContent.timeText}</b>
      <i
        style={{
          fontSize: "14px",
          textTransform: "uppercase",
          padding: "2px 0",
          fontWeight: "bold",
        }}
      >
        {eventContent.event.title}
      </i>
    </>
  );
}

export default Calendar;
