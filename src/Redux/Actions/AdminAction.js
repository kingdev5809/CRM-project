import { toast } from "react-toastify";
import * as AdminApi from "../../api/AdminRequest";

import {
  GROUPS_GET_ALL_CREATED,
  GROUPS_GET_ALL_DELETED,
  GROUPS_GET_ALL_FAIL,
  GROUPS_GET_ALL_REQUEST,
  GROUPS_GET_ALL_SUCCESS,
  GROUPS_GET_ONE_FAIL,
  GROUPS_GET_ONE_REQUEST,
  GROUPS_GET_ONE_SUCCESS,
  GROUPS_POST_STUDENT_ADD,
  GROUPS_POST_STUDENT_REMOVED,
  GROUPS_TIMES_GET_ALL_DELETE,
  GROUPS_TIMES_GET_ALL_FAIL,
  GROUPS_TIMES_GET_ALL_REQUEST,
  GROUPS_TIMES_GET_ALL_SUCCESS,
  LOCATION_GET_ALL_CREATED,
  LOCATION_GET_ALL_DELETED,
  LOCATION_GET_ALL_FAIL,
  LOCATION_GET_ALL_REQUEST,
  LOCATION_GET_ALL_SUCCESS,
  STUDENT_GET_ALL_CREATED,
  STUDENT_GET_ALL_DELETED,
  STUDENT_GET_ALL_FAIL,
  STUDENT_GET_ALL_REQUEST,
  STUDENT_GET_ALL_SUCCESS,
  SUBJECTS_GET_ALL_FAIL,
  SUBJECTS_GET_ALL_REQUEST,
  SUBJECTS_GET_ALL_SUCCESS,
  TEACHER_GET_ALL_CREATED,
  TEACHER_GET_ALL_DELETED,
  TEACHER_GET_ALL_FAIL,
  TEACHER_GET_ALL_REQUEST,
  TEACHER_GET_ALL_SUCCESS,
} from "../Constants/AdminContants";

// GET ALL TEACHERS
export const getAllTeachers = () => async (dispatch) => {
  dispatch({ type: TEACHER_GET_ALL_REQUEST });
  try {
    const { data } = await AdminApi.getTeachers();
    dispatch({ type: TEACHER_GET_ALL_SUCCESS, payload: data.teachers });
  } catch (error) {
    dispatch({
      type: TEACHER_GET_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// GET ALL STUDENTS

export const getAllStudents = () => async (dispatch) => {
  dispatch({ type: STUDENT_GET_ALL_REQUEST });
  try {
    const { data } = await AdminApi.getStudents();
    dispatch({ type: STUDENT_GET_ALL_SUCCESS, payload: data.students });
  } catch (error) {
    dispatch({
      type: STUDENT_GET_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// GET ALL GROUPS

export const getAllGroups = () => async (dispatch) => {
  dispatch({ type: GROUPS_GET_ALL_REQUEST });
  try {
    const { data } = await AdminApi.getGroups();
    dispatch({ type: GROUPS_GET_ALL_SUCCESS, payload: data.groups });
  } catch (error) {
    dispatch({
      type: GROUPS_GET_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// GET One GROUPS

export const getOneGroup = (token) => async (dispatch) => {
  dispatch({ type: GROUPS_GET_ONE_REQUEST });
  try {
    const { data } = await AdminApi.getGroupStudents(token);
    dispatch({ type: GROUPS_GET_ONE_SUCCESS, payload: data.students });
  } catch (error) {
    dispatch({
      type: GROUPS_GET_ONE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// GET All GROUP Times

export const getAllGroupTimes = () => async (dispatch) => {
  dispatch({ type: GROUPS_TIMES_GET_ALL_REQUEST });
  try {
    const { data } = await AdminApi.getAllGroupTimes();

    dispatch({ type: GROUPS_TIMES_GET_ALL_SUCCESS, payload: data.groupTimes });
  } catch (error) {
    dispatch({
      type: GROUPS_TIMES_GET_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// GET All Subjects
export const getAllSubject = () => async (dispatch) => {
  dispatch({ type: SUBJECTS_GET_ALL_REQUEST });
  try {
    const { data } = await AdminApi.getSubjects();

    dispatch({ type: SUBJECTS_GET_ALL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SUBJECTS_GET_ALL_FAIL,
      payload:
        error.response && error.response.subjectData.message
          ? error.response.subjectData.message
          : error.message,
    });
  }
};

// GET ALL Locations

export const getAllLocation = () => async (dispatch) => {
  dispatch({ type: LOCATION_GET_ALL_REQUEST });
  try {
    const { data } = await AdminApi.getLocations();
    dispatch({ type: LOCATION_GET_ALL_SUCCESS, payload: data.locations });
  } catch (error) {
    dispatch({
      type: LOCATION_GET_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// POST TEACHERS

export const postTeachers =
  (
    name,
    email,
    address,
    surname,
    subject,
    phone_number,
    photo,
    setVisibleModal
  ) =>
  async (dispatch) => {
    try {
      const { data } = await AdminApi.postTeachers({
        name,
        email,
        address,
        surname,
        subject,
        phone_number,
        photo,
      });
      console.log(data);

      if (data.error) {
        toast.warning(data.error);
      } else {
        toast.success(data.msg);
        setVisibleModal("d-none");
        dispatch({ type: TEACHER_GET_ALL_CREATED, payload: data.teacher });
      }
    } catch (error) {
      console.log(error);
    }
  };

// POST GROUPS

export const postGroups =
  (
    group_name,
    subject,
    teacher,
    bg_color,
    text_color,
    text,
    setVisibleModal,
    setGroup_name,
    setSubject,
    setTeacher,
    setBg_color,
    setText_color,
    setText
  ) =>
  async (dispatch) => {
    try {
      const { data } = await AdminApi.postGroups({
        group_name,
        subject,
        teacher,
        bg_color,
        text_color,
        text,
      });
      console.log(data);
      if (data.error) {
        toast.warning(data.error);
      } else {
        toast.success(data.msg);
        dispatch({ type: GROUPS_GET_ALL_CREATED, payload: data.group[0] });
        setVisibleModal("d-none");
        setGroup_name("");
        setSubject("");
        setTeacher("");
        setBg_color("");
        setText_color("");
        setText("");
      }
    } catch (error) {
      console.log(error);
    }
  };

// POST Students

export const postStudents =
  (
    name,
    surname,
    email,
    address,
    phone_number,
    person_nr,
    parents_name,
    parents_phone_number,
    photo,
    setVisibleModal,
    setName,
    setSurname,
    setEmail,
    setPhone_number,
    setAddress,
    setPerson_nr,
    setParents_name,
    setParents_phone_number
  ) =>
  async (dispatch) => {
    try {
      const { data } = await AdminApi.postStudents({
        name,
        surname,
        email,
        address,
        phone_number,
        person_nr,
        parents_name,
        parents_phone_number,
        photo,
      });
      console.log(data);
      if (data.error) {
        toast.warning(data.error);
      } else {
        toast.success(data.msg);
        setVisibleModal("d-none");
        dispatch({ type: STUDENT_GET_ALL_CREATED, payload: data.student });
        setName("");
        setSurname("");
        setEmail("");
        setPhone_number("");
        setAddress("");
        setPerson_nr("");
        setParents_name("");
        setParents_phone_number("");
      }
    } catch (error) {
      console.log(error);
    }
  };

// POST Students to group

export const postStudentToGroup =
  (student, group, setVisibleModal) => async (dispatch) => {
    try {
      const { data } = await AdminApi.postStudentToGroup({
        student,
        group,
      });
      console.log(data);
      if (data.error) {
        toast.warning(data.error);
      } else {
        toast.success(data.msg);
        dispatch({ type: GROUPS_POST_STUDENT_ADD, payload: data.room });
        setVisibleModal("d-none");
      }
    } catch (error) {
      console.log(error);
    }
  };

// POST Group Times

export const postGroupTime =
  (
    group_id,
    start_day,
    start,
    end_day,
    end,
    address,
    color,
    text,
    teacher_id,
    setVisibleModal,
    setGroup_id,
    setEnd_day,
    setAddress,
    setColor,
    setText,
    setTeacher_id
  ) =>
  async (dispatch) => {
    try {
      const { data } = await AdminApi.postGroupTimes({
        group_id,
        start_day,
        start,
        end_day,
        end,
        address,
        color,
        text,
        teacher_id,
      });

      if (data.error) {
        toast.warning(data.error);
      } else {
        toast.success(data.msg);
        dispatch({
          type: GROUPS_TIMES_GET_ALL_DELETE,
          payload: data.groupTime,
        });

        setVisibleModal("d-none");
        setGroup_id("");
        setEnd_day("");
        setAddress("");
        setColor("");
        setText("");
        setTeacher_id("");
      }
    } catch (error) {
      console.log(error);
    }
  };

// POST Locations

export const postLocation =
  (location, setVisibleModal, setLocation) => async (dispatch) => {
    try {
      const { data } = await AdminApi.postLocations({
        location,
      });
      console.log(data);
      if (data.error) {
        toast.warning(data.error);
      } else {
        toast.success(data.msg);
        setVisibleModal("d-none");
        dispatch({ type: LOCATION_GET_ALL_CREATED, payload: data });
        setLocation("");
      }
    } catch (error) {
      console.log(error);
    }
  };

// Delete Students

export const deleteStudent = (student_id) => async (dispatch) => {
  try {
    const { data } = await AdminApi.deleteStudents(student_id);

    if (data.error) {
      toast.warning(data.error);
    } else {
      toast.success(data.msg);
      dispatch({ type: STUDENT_GET_ALL_DELETED, payload: student_id });
    }
  } catch (error) {
    console.log(error);
  }
};

// Delete Teachers

export const deleteTeacher = (teacher_id) => async (dispatch) => {
  try {
    const { data } = await AdminApi.deleteTeachers(teacher_id);

    if (data.error) {
      toast.warning(data.error);
    } else {
      toast.success(data.msg);
      dispatch({ type: TEACHER_GET_ALL_DELETED, payload: teacher_id });
    }
  } catch (error) {
    console.log(error);
  }
};

// Delete classes

export const deleteClass = (classes_id) => async (dispatch) => {
  try {
    const { data } = await AdminApi.deleteClasses(classes_id);
    if (data.error) {
      toast.warning(data.error);
    } else {
      toast.success(data.msg);
      dispatch({ type: GROUPS_GET_ALL_DELETED, payload: classes_id });
    }
  } catch (error) {
    console.log(error);
  }
};

// Delete student from room

export const removeStudent =
  (student, group, setGroup, setStudent, setDeleteModalVisible) =>
  async (dispatch) => {
    try {
      const { data } = await AdminApi.removeStudents({
        student,
        group,
      });
      if (data.error) {
        toast.warning(data.error);
      } else {
        toast.success(data.msg);
        dispatch({ type: GROUPS_POST_STUDENT_REMOVED, payload: student });
        setDeleteModalVisible("d-none");
        setGroup();
        setStudent();
      }
    } catch (error) {
      console.log(error);
    }
  };

// Delete Teachers

export const deleteLocation = (location_id) => async (dispatch) => {
  try {
    const { data } = await AdminApi.deleteLocations(location_id);

    if (data.error) {
      toast.warning(data.error);
    } else {
      toast.success(data.msg);
      dispatch({ type: LOCATION_GET_ALL_DELETED, payload: location_id });
    }
  } catch (error) {
    console.log(error);
  }
};

// Delete Group Time Modal

export const deleteGroupTime = (id) => async (dispatch) => {
  try {
    const { data } = await AdminApi.deleteGroupTimes(id);

    if (data.error) {
      toast.warning(data.error);
    } else {
      toast.success(data.msg);
      dispatch({ type: GROUPS_TIMES_GET_ALL_DELETE, payload: id });
    }
  } catch (error) {
    console.log(error);
  }
};

// Update teacher

export const updateTeacher =
  (
    name,
    surname,
    subject,
    email,
    phone_number,
    address,
    photo,
    teacher_id,
    setRefresh,
    setUpdateVisibleModal
  ) =>
  async () => {
    try {
      const { data } = await AdminApi.updateTeachers(
        {
          name,
          surname,
          subject,
          email,
          phone_number,
          address,
          photo,
        },
        teacher_id
      );

      if (data.error) {
        toast.warning(data.error);
      } else {
        toast.success(data.msg);
        setRefresh(name);
        setUpdateVisibleModal("d-none");
      }
    } catch (error) {
      console.log(error);
    }
  };

// Update Student

export const updateStudent =
  (
    name,
    surname,
    email,
    phone_number,
    address,
    photo,
    person_nr,
    parents_name,
    parents_phone_number,
    student_id,
    setRefresh,
    setUpdateVisibleModal
  ) =>
  async () => {
    try {
      const { data } = await AdminApi.updateStudents(
        {
          name,
          surname,
          email,
          phone_number,
          address,
          photo,
          person_nr,
          parents_name,
          parents_phone_number,
        },
        student_id
      );

      if (data.error) {
        toast.warning(data.error);
      } else {
        toast.success(data.msg);
        setRefresh(name);
        setUpdateVisibleModal("d-none");
      }
    } catch (error) {
      console.log(error);
    }
  };

// update class
export const updateClass =
  (
    group_name,
    subject,
    teacher,
    bg_color,
    text_color,
    text,
    group_id,
    setRefresh,
    setVisibleModal
  ) =>
  async () => {
    try {
      const { data } = await AdminApi.updateClasses(
        {
          group_name,
          subject,
          teacher,
          bg_color,
          text_color,
          text,
        },
        group_id
      );
      console.log(group_name);
      if (data.error) {
        toast.warning(data.error);
      } else {
        toast.success(data.msg);
        setRefresh(group_name);
        setVisibleModal("d-none");
      }
    } catch (error) {
      console.log(error);
    }
  };

// update group time
export const updateGroupTime =
  (
    dataTime,
    id,
    setVisibleModal,
    setGroup_id,
    setEnd_day,
    setAddress,
    setColor,
    setText,
    setTeacher_id,
    setId,
    setRefresh
  ) =>
  async () => {
    try {
      const { data } = await AdminApi.updateGroupTimes(dataTime, id);
      console.log(dataTime);
      if (data.error) {
        toast.warning(data.error);
      } else {
        toast.success(data.msg);
        setRefresh(dataTime);
        setVisibleModal("d-none");
        setGroup_id("");
        setEnd_day("");
        setAddress("");
        setColor("");
        setText("");
        setTeacher_id("");
        setId("");
      }
    } catch (error) {
      console.log(error);
    }
  };
